/* ==============================================
   Liftron ARD — Interactions
   ============================================== */

(function () {
  'use strict';

  /* ---------- NAVBAR SCROLL EFFECT + BACK TO TOP ---------- */
  const navbar = document.getElementById('navbar');
  const topBtn = document.getElementById('backToTop');
  const onScroll = () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    if (topBtn) {
      if (window.scrollY > 500) topBtn.classList.add('visible');
      else topBtn.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- MOBILE MENU ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- SMOOTH SCROLL ---------- */
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

  /* ---------- HERO SLIDER ---------- */
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('slideDots');
  const prevBtn = document.getElementById('slidePrev');
  const nextBtn = document.getElementById('slideNext');
  let current = 0;
  let timer = null;

  if (slides.length && dotsWrap) {
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', 'Slide ' + (i + 1));
      if (i === 0) b.classList.add('active');
      b.addEventListener('click', () => go(i));
      dotsWrap.appendChild(b);
    });
    const dots = dotsWrap.querySelectorAll('button');

    function go(idx) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      resetTimer();
    }
    function next() { go(current + 1); }
    function prev() { go(current - 1); }
    function resetTimer() { clearInterval(timer); timer = setInterval(next, 6000); }

    prevBtn && prevBtn.addEventListener('click', prev);
    nextBtn && nextBtn.addEventListener('click', next);
    resetTimer();

    // pause on hover
    const slider = document.querySelector('.hero-slider');
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', resetTimer);
  }

  /* ---------- REVEAL ON SCROLL ---------- */
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
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('en-IN');
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('en-IN');
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

  /* ---------- TESTIMONIAL SLIDER ---------- */
  const track = document.getElementById('testimonialTrack');
  const tPrev = document.getElementById('tPrev');
  const tNext = document.getElementById('tNext');
  if (track && tPrev && tNext) {
    let tIndex = 0;
    const cards = track.querySelectorAll('.t-card');
    const total = cards.length;

    function update() {
      const width = track.clientWidth;
      track.scrollTo({ left: width * tIndex, behavior: 'smooth' });
    }
    tNext.addEventListener('click', () => { tIndex = (tIndex + 1) % total; update(); });
    tPrev.addEventListener('click', () => { tIndex = (tIndex - 1 + total) % total; update(); });
    window.addEventListener('resize', update);

    // auto-advance
    setInterval(() => { tIndex = (tIndex + 1) % total; update(); }, 7000);
  }

  /* ---------- CONTACT FORM → WHATSAPP ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const WA_NUMBER = '918789279811';

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !phone || !email || !message) {
        status.textContent = 'Please fill in all fields.';
        status.classList.add('error'); return;
      }
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        status.textContent = 'Please enter a valid email address.';
        status.classList.add('error'); return;
      }

      status.classList.remove('error');
      status.textContent = 'Opening WhatsApp…';

      const text =
        `*New Enquiry — Liftron ARD*%0A%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Message:* ${encodeURIComponent(message)}`;
      window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank', 'noopener');

      setTimeout(() => {
        status.textContent = 'Thanks! We will get back to you shortly.';
        form.reset();
      }, 600);
    });
  }

  /* ---------- FOOTER YEAR ---------- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
