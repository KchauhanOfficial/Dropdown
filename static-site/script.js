/* ==============================================
   Liftron ARD — Interactions
   ============================================== */

(function () {
  'use strict';

  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    const topBtn = document.getElementById('backToTop');
    if (topBtn) {
      if (window.scrollY > 500) topBtn.classList.add('visible');
      else topBtn.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- MOBILE MENU TOGGLE ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- SMOOTH SCROLL (fallback for older browsers) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- REVEAL ON SCROLL (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- STAT COUNTERS ---------- */
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && counters.length) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => co.observe(c));
  }

  /* ---------- CONTACT FORM → WHATSAPP ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const WA_NUMBER = '918789279811'; // +91 8789279811

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !phone || !email || !message) {
        status.textContent = 'Please fill in all fields.';
        status.classList.add('error');
        return;
      }
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        status.textContent = 'Please enter a valid email address.';
        status.classList.add('error');
        return;
      }

      status.classList.remove('error');
      status.textContent = 'Opening WhatsApp…';

      const text =
        `*New Enquiry — Liftron ARD*%0A%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Message:* ${encodeURIComponent(message)}`;

      const url = `https://wa.me/${WA_NUMBER}?text=${text}`;
      window.open(url, '_blank', 'noopener');

      setTimeout(() => {
        status.textContent = 'Thanks! We will get back to you shortly.';
        form.reset();
      }, 600);
    });
  }

  /* ---------- FOOTER YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
