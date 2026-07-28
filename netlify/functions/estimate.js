// ============================================================
//  Universal Landscaping — Secure Anthropic API Proxy
// ------------------------------------------------------------
//  This serverless function runs on Netlify's servers, NEVER in
//  the browser. Your ANTHROPIC_API_KEY lives only in Netlify's
//  environment variables and is never exposed to visitors.
//
//  The AI Quote Estimator on your site sends the prompt here;
//  this function forwards it to Anthropic with your key,
//  and returns Claude's response back to the browser.
// ============================================================

exports.handler = async function (event) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // Grab the API key from Netlify environment variables
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY environment variable not set");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server misconfiguration" }),
    };
  }

  // Parse the request body from the browser
  let prompt;
  try {
    const body = JSON.parse(event.body || "{}");
    prompt = body.prompt;
    if (!prompt || typeof prompt !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing prompt" }),
      };
    }
    // Basic length guard — prevents abuse
    if (prompt.length > 4000) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Prompt too long" }),
      };
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  // Forward to Anthropic
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 400,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Upstream API error" }),
      };
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || "";

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({ text }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal error" }),
    };
  }
};
