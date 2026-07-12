/*
  assets/js/main.js
  Vanilla JavaScript, no frameworks or build step required.
  Currently this file has features: mobile nav toggle, reveal on scroll,
  hero parallax, and (new) a lightweight carousel for item pages.
*/

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  // Close the mobile menu automatically if the window is resized back
  // to desktop width while it's open.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 760 && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    }
  });

  // ------------------------------------------------------------------
  // Slow, cinematic scroll-reveal for cards, tiles, and images.
  // ------------------------------------------------------------------
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var revealTargets = document.querySelectorAll('.card, .tile-card, .event-tile, .item-page__image, .gallery-room');

    revealTargets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)';
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ------------------------------------------------------------------
  // Slight parallax on the Hero's colour plane
  // ------------------------------------------------------------------
  var hero = document.querySelector('.hero');

  if (hero && !prefersReducedMotion) {
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var offset = Math.min(window.scrollY * 0.15, 60);
          hero.style.setProperty('--hero-parallax', offset + 'px');
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ------------------------------------------------------------------
  // Lightweight carousel for item pages
  // - shows thumbnails from .item-page__photo-grid
  // - updates the main .item-page__media-img
  // - supports prev/next buttons and keyboard arrows
  // ------------------------------------------------------------------
  function initItemPageCarousels() {
    var itemPages = document.querySelectorAll('.item-page');

    itemPages.forEach(function (page) {
      var media = page.querySelector('.item-page__media');
      if (!media) return;

      var mainImg = media.querySelector('.item-page__media-img');
      var thumbs = media.querySelectorAll('.item-page__photo-grid img');
      if (!thumbs || thumbs.length === 0) return;

      // Create controls container
      var controls = document.createElement('div');
      controls.className = 'item-page__carousel-controls';

      var prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'item-page__carousel-prev';
      prevBtn.setAttribute('aria-label', 'Previous image');
      prevBtn.textContent = '‹';

      var nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'item-page__carousel-next';
      nextBtn.setAttribute('aria-label', 'Next image');
      nextBtn.textContent = '›';

      controls.appendChild(prevBtn);
      controls.appendChild(nextBtn);
      media.appendChild(controls);

      var current = 0;
      function showIndex(i) {
        if (i < 0) i = thumbs.length - 1;
        if (i >= thumbs.length) i = 0;
        current = i;
        var src = thumbs[current].getAttribute('src');
        if (mainImg) mainImg.setAttribute('src', src);

        // update selected thumbnail
        thumbs.forEach(function (t, idx) {
          if (idx === current) t.classList.add('selected'); else t.classList.remove('selected');
        });
      }

      // Initial selection
      showIndex(0);

      // Thumb clicks
      thumbs.forEach(function (t, idx) {
        t.addEventListener('click', function () { showIndex(idx); });
      });

      // Button clicks
      prevBtn.addEventListener('click', function (e) { e.preventDefault(); showIndex(current - 1); });
      nextBtn.addEventListener('click', function (e) { e.preventDefault(); showIndex(current + 1); });

      // Keyboard navigation when focused inside the page
      page.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { showIndex(current - 1); }
        if (e.key === 'ArrowRight') { showIndex(current + 1); }
      });

      // Make thumbnails tabbable
      thumbs.forEach(function (t) { t.setAttribute('tabindex', '0'); });

    });
  }

  // Run the carousel init after a short delay so images are parsed
  setTimeout(initItemPageCarousels, 80);

});
