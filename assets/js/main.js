/*
  assets/js/main.js
  Vanilla JavaScript, no frameworks or build step required.
  Currently this file has one job: open/close the mobile navigation
  menu when the hamburger button is tapped. Later steps (e.g. the
  Publications page) may add small, focused features here too.
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
  // This is "progressive enhancement": elements are fully visible by
  // default in the CSS. Only once this script confirms it's running
  // (and the visitor hasn't asked for reduced motion) do we add a
  // starting "hidden" state via inline style, then reveal each
  // element as it scrolls into view. If JavaScript fails to load for
  // any reason, visitors simply see the page with no animation —
  // nothing is ever stuck invisible.
  // ------------------------------------------------------------------
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var revealTargets = document.querySelectorAll('.card, .tile-card, .event-tile, .item-page__image');

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
});
