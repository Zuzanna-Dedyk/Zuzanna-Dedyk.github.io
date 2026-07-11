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
});
