/* ================================================================
   UNIVERSAL LANDSCAPING — SHARED LAYOUT MARKUP (header + footer)
   ================================================================
   Edit the HTML for the top header or bottom footer HERE, once, and
   every page updates. Each page only needs:
     <div id="site-header"></div>   (where the header goes)
     <div id="site-footer"></div>   (where the footer goes)
     <script src="layout.js" defer></script>
   Styling lives in layout.css; colours in theme.css.
   ================================================================ */
(function () {
  var fb = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
  var ig = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';

  var fbSvgWhite = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
  var igSvgWhite = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#ffffff" stroke="none"/></svg>';
  var fbImg = '<img src="data:image/svg+xml,' + encodeURIComponent(fbSvgWhite) + '" alt="" width="16" height="16" />';
  var igImg = '<img src="data:image/svg+xml,' + encodeURIComponent(igSvgWhite) + '" alt="" width="16" height="16" />';

  var headerHTML = '' +
    '<nav id="ulh-nav" class="ulh-nav" role="navigation" aria-label="Main navigation">' +
      '<div class="ulh-topbar">' +
        '<ul class="ulh-topbar-info" role="list">' +
          '<li class="ulh-loc"><span aria-hidden="true">\uD83D\uDCCD</span> Bedford, Nova Scotia</li>' +
          '<li><a href="tel:9024418755">902 441 8755</a></li>' +
          '<li class="ulh-hide-mobile">Mon\u2013Fri 7:30 AM \u2013 7:00 PM</li>' +
        '</ul>' +
        '<div class="ulh-topbar-social">' +
          '<a href="https://www.facebook.com/universallawncare1/" target="_blank" rel="noopener" aria-label="Facebook">' + fb + '</a>' +
          '<a href="https://www.instagram.com/universal_landscapin/" target="_blank" rel="noopener" aria-label="Instagram">' + ig + '</a>' +
        '</div>' +
      '</div>' +
      '<div class="ulh-main">' +
        '<a href="index.html" class="ulh-logo"><img src="logo.png" alt="Universal Landscaping logo" /></a>' +
        '<div class="ulh-right">' +
          '<ul class="ulh-links" role="list">' +
            '<li><a href="services.html" data-nav="services.html">Services</a></li>' +
            '<li><a href="about.html" data-nav="about.html">About</a></li>' +
            '<li><a href="gallery.html" data-nav="gallery.html">Gallery</a></li>' +
            '<li><a href="reviews.html" data-nav="reviews.html">Reviews</a></li>' +
            '<li><a href="blog.html" data-nav="blog.html">Blog</a></li>' +
            '<li><a href="careers.html" data-nav="careers.html">Careers</a></li>' +
          '</ul>' +
          '<a href="index.html#estimator-trigger" class="ulh-promo" aria-label="Try our new AI estimate tool"><span class="ulh-spark" aria-hidden="true">\u2728</span>Try Our AI Estimator</a>' +
          '<a href="index.html#quote" class="ulh-cta">Get a Free Quote</a>' +
        '</div>' +
        '<button class="ulh-hamburger" id="ulh-hamburger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</nav>' +
    '<div id="ulh-mobile-menu" class="ulh-mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">' +
      '<a href="services.html">Services</a>' +
      '<a href="about.html">About</a>' +
      '<a href="gallery.html">Gallery</a>' +
      '<a href="reviews.html">Reviews</a>' +
      '<a href="blog.html">Blog</a>' +
      '<a href="careers.html">Careers</a>' +
      '<a href="index.html#estimator-trigger">\u2728 Try Our AI Estimator</a>' +
      '<a href="index.html#quote">Get a Quote</a>' +
    '</div>';


  var footerHTML = '' +
    '<footer class="ulf-footer">' +
      '<div class="ulf-grid">' +
        '<div>' +
          '<div class="ulf-logo"><img src="logo.png" alt="Universal Landscaping logo" /></div>' +
          '<p class="ulf-tagline">Our Crew. Your Vision.<br>Phenomenal Results.</p>' +
          '<div class="ulf-social" aria-label="Social media links">' +
            '<a href="https://www.facebook.com/universallawncare1/" class="ulf-social-link" target="_blank" rel="noopener" aria-label="Facebook">' + fbImg + '</a>' +
            '<a href="https://www.instagram.com/universal_landscapin/" class="ulf-social-link" target="_blank" rel="noopener" aria-label="Instagram">' + igImg + '</a>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="ulf-col-title">Hours of Operation</div>' +
          '<div class="ulf-hours"><span>Mon \u2013 Fri</span><span>7:30 AM \u2013 7:00 PM</span></div>' +
          '<div class="ulf-hours"><span>Saturday</span><span>8:30 AM \u2013 5:00 PM</span></div>' +
          '<div class="ulf-hours"><span>Sunday</span><span>9:00 AM \u2013 5:00 PM</span></div>' +
        '</div>' +
        '<div>' +
          '<div class="ulf-col-title">Quick Links</div>' +
          '<ul class="ulf-links">' +
            '<li><a href="about.html">About Us</a></li>' +
            '<li><a href="services.html">Services</a></li>' +
            '<li><a href="gallery.html">Gallery</a></li>' +
            '<li><a href="reviews.html">Reviews</a></li>' +
            '<li><a href="blog.html">Blog</a></li>' +
            '<li><a href="careers.html">Careers</a></li>' +
            '<li><a href="index.html#quote">Contact Us</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="ulf-bottom">' +
        '<span>\u00A9 2025 Universal Landscaping. All rights reserved.</span>' +
        '<span class="ulf-legal"><a href="privacy-policy.html">Privacy Policy</a> \u00B7 <a href="terms-conditions.html">Terms &amp; Conditions</a></span>' +
        '<span>Bedford, Nova Scotia \uD83C\uDF41</span>' +
      '</div>' +
    '</footer>';

  var partnersHTML = '' +
    '<section class="ulb-partners" aria-label="Our trusted suppliers and partners">' +
      '<div class="ulb-header">' +
        '<span class="ulb-eyebrow">Trusted Partners</span>' +
        '<h2 class="ulb-title">Quality materials from trusted suppliers.</h2>' +
      '</div>' +
      '<div class="ulb-belt">' +
        '<div class="ulb-track">' +
        '<div class="ulb-chip"><img src="casey-concrete.png" alt="Casey Concrete Landscape and Masonry" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="dexter-logo.png" alt="Dexter Construction" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="EARTHCO-Premium-Soils.png" alt="Earthco Premium Soils" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="Elmsdale-logo.png" alt="Elmsdale Landscaping Ltd" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="Kent-Building-Supplies-Logo.jpg" alt="Kent Building Supplies" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="Kynock_logo.png" alt="Kynock Resources" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="Oaks-Logo.png" alt="Oaks Landscape Products" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="TechoBloc-logo.webp" alt="Techo-Bloc" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="Permacon-logo.jpg" alt="Permacon" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="shawbrick-logo.webp" alt="Shaw Brick" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="stone_depot.webp" alt="Stone Depot" loading="lazy" /></div>' +
        '<div class="ulb-chip"><img src="the-home-depot-logo.jpg" alt="The Home Depot" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="casey-concrete.png" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="dexter-logo.png" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="EARTHCO-Premium-Soils.png" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="Elmsdale-logo.png" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="Kent-Building-Supplies-Logo.jpg" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="Kynock_logo.png" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="Oaks-Logo.png" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="TechoBloc-logo.webp" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="Permacon-logo.jpg" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="shawbrick-logo.webp" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="stone_depot.webp" alt="" loading="lazy" /></div>' +
        '<div class="ulb-chip" aria-hidden="true"><img src="the-home-depot-logo.jpg" alt="" loading="lazy" /></div>' +
        '</div>' +
      '</div>' +
    '</section>';

  // ---- Favicon + Organization schema, injected into <head> for EVERY page ----
  function injectHead() {
    var head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;

    // ---- Self-referencing canonical URL ----
    // Declares ONE authoritative EXTENSIONLESS URL per page so Google never
    // treats the .html version and the pretty extensionless version as
    // duplicates. Netlify serves pretty URLs by default, so extensionless is
    // the canonical form. Runs on every page, no per-page editing needed.
    if (!document.querySelector('link[rel="canonical"]')) {
      var origin = 'https://universallandscaping.ca';
      var file = location.pathname.split('/').pop() || 'index.html';
      // Strip any .html extension so the canonical is always extensionless.
      file = file.replace(/\.html$/i, '');
      // The homepage (index or empty) canonicalizes to the bare root "/".
      var canonicalPath = (file === '' || file === 'index') ? '/' : '/' + file;
      var canonicalUrl = origin + canonicalPath;

      var link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      head.appendChild(link);

      // Keep og:url in sync (only add if the page didn't set one itself)
      if (!document.querySelector('meta[property="og:url"]')) {
        var og = document.createElement('meta');
        og.setAttribute('property', 'og:url');
        og.setAttribute('content', canonicalUrl);
        head.appendChild(og);
      }
    }

    if (!document.querySelector('link[rel="icon"]')) {
      var icons = [
        { rel: 'icon', href: 'favicon.png', type: 'image/png' },
        { rel: 'icon', href: 'favicon-32x32.png', type: 'image/png', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }
      ];
      icons.forEach(function (ic) {
        var l = document.createElement('link');
        l.rel = ic.rel; l.href = ic.href;
        if (ic.type) l.type = ic.type;
        if (ic.sizes) l.setAttribute('sizes', ic.sizes);
        head.appendChild(l);
      });
    }
    if (!document.getElementById('ul-org-schema')) {
      var sc = document.createElement('script');
      sc.type = 'application/ld+json';
      sc.id = 'ul-org-schema';
      sc.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Universal Landscaping',
        'url': 'https://universallandscaping.ca',
        'logo': 'https://universallandscaping.ca/logo.png',
        'image': 'https://universallandscaping.ca/favicon.png',
        'telephone': '+19024418755',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Bedford',
          'addressRegion': 'NS',
          'addressCountry': 'CA'
        },
        'areaServed': 'Halifax Regional Municipality, Nova Scotia'
      });
      head.appendChild(sc);
    }
  }

  function init() {
    var h = document.getElementById('site-header');
    if (h) h.innerHTML = headerHTML;
    var f = document.getElementById('site-footer');
    if (f) f.innerHTML = footerHTML;
    var pt = document.getElementById('site-partners');
    if (pt) pt.innerHTML = partnersHTML;

    var nav = document.getElementById('ulh-nav');
    if (nav) {
      var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 40); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    var burger = document.getElementById('ulh-hamburger');
    var menu = document.getElementById('ulh-mobile-menu');
    if (burger && menu) {
      burger.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          menu.classList.remove('open');
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    // Highlight the current page in the nav
    var page = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.ulh-links a[data-nav]');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-nav') === page) links[i].classList.add('active');
    }
  }

  injectHead();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
