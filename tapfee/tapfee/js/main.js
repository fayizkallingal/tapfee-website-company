// TapFee website scripts
(function () {
  'use strict';

  // ---- CONFIG: change this to your real contact email / WhatsApp number ----
  var CONFIG = {
    contactEmail: 'hello@tapfee.in', // where "Get Started" form enquiries are sent (opens the visitor's mail app)
    whatsappNumber: ''               // optional, e.g. '919876543210' — if set, the form opens WhatsApp instead
  };

  // Sticky nav style
  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 30); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = document.getElementById('menuToggle');
  var links = document.getElementById('navLinks');
  var mobileCta = links.querySelector('.nav-cta-mobile');
  function setMenu(open) {
    links.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (mobileCta) mobileCta.style.display = open ? 'inline-flex' : 'none';
  }
  toggle.addEventListener('click', function () { setMenu(!links.classList.contains('open')); });
  links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Lead form
  var form = document.getElementById('leadForm');
  var msg = document.getElementById('formMsg');
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var biz = form.biz.value;
    msg.className = 'form-msg';
    if (!name || !biz || phone.replace(/\D/g, '').length < 8) {
      msg.textContent = 'Please enter your name, a valid phone number and your business type.';
      msg.classList.add('err');
      return;
    }
    var text = 'Hi TapFee, I would like to get started.\nName: ' + name + '\nPhone: ' + phone + '\nBusiness: ' + biz;
    var url = CONFIG.whatsappNumber
      ? 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(text)
      : 'mailto:' + CONFIG.contactEmail + '?subject=' + encodeURIComponent('TapFee enquiry - ' + biz) + '&body=' + encodeURIComponent(text);
    msg.textContent = 'Thanks ' + name + '! Opening your ' + (CONFIG.whatsappNumber ? 'WhatsApp' : 'email app') + ' to send your details…';
    msg.classList.add('ok');
    window.location.href = url;
    form.reset();
  });
})();
