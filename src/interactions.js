export function setupInteractions() {
  'use strict';
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const loader = document.querySelector('.preloader');
  // Deferred script runs after parsing; there is no artificial minimum duration.
  if (loader && !motion.matches) {
    loader.classList.add('loading');
    const dismiss = () => loader.classList.remove('loading');
    requestAnimationFrame(() => requestAnimationFrame(dismiss));
    setTimeout(dismiss, 1200);
    window.addEventListener('pageshow', dismiss);
  }
  if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          reveal.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08});
    if (!motion.matches) document.querySelectorAll('.reveal').forEach(el => {
      // Fallback timer ensures animation failure cannot leave content hidden.
      reveal.observe(el);
    });
    const links = [...document.querySelectorAll('nav a')];
    const active = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) links.forEach(link => {
          const selected = link.hash === '#' + entry.target.id;
          link.classList.toggle('active', selected);
          if (selected) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-10% 0px -65% 0px', threshold: 0});
    links.forEach(link => {const section = link.pathname === location.pathname ? document.querySelector(link.hash) : null; if (section) active.observe(section);});
  }
  const video = document.querySelector('video');
  const play = document.querySelector('.video-play');
  if (video && play) {
    play.style.display = 'flex';
    play.addEventListener('click', async () => {
      try { await video.play(); play.style.display = 'none'; }
      catch { play.style.display = 'none'; video.focus(); }
    });
    video.addEventListener('play', () => {play.style.display = 'none';});
    video.addEventListener('ended', () => {play.style.display = 'flex';});
  }
  const canvas = document.getElementById('stars');
  const ctx = canvas?.getContext('2d');
  if (!ctx) return;
  let particles = [], frame = 0, width = 0, height = 0, visible = true, last = 0;
  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width; height = rect.height;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({length: width < 700 ? 25 : 65}, () => ({
      x: Math.random() * width, y: Math.random() * height,
      r: Math.random() * 1.1 + .3, speed: Math.random() * 5 + 2, alpha: Math.random() * .35 + .12
    }));
    paint(0);
  }
  function paint(dt) {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.y -= p.speed * dt;
      if (p.y < 0) p.y = height;
      ctx.beginPath(); ctx.fillStyle = `rgba(198,225,183,${p.alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    });
  }
  function loop(time) {
    frame = 0;
    if (motion.matches || document.hidden || !visible) {last = 0; return;}
    paint(last ? Math.min((time - last) / 1000, .05) : 0); last = time;
    frame = requestAnimationFrame(loop);
  }
  function resume() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; last = 0;
    if (!motion.matches && !document.hidden && visible) frame = requestAnimationFrame(loop);
    else paint(0);
  }
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
  else window.addEventListener('resize', resize);
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting; resume();
  }).observe(canvas);
  document.addEventListener('visibilitychange', resume);
  motion.addEventListener('change', resume);
  resize(); resume();
}
