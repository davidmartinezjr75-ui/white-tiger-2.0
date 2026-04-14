import * as Turbo from '@hotwired/turbo';
import './style.css';
import './pages.css';

Turbo.start();

// Module-level controller — aborted on each Turbo navigation to clean up all listeners
let interactionController: AbortController | null = null;

// ── Reduced Motion Check ──
function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function skipAnimations(): void {
  document.querySelectorAll(
    '.fade-in, .anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale-in, .timeline-item'
  ).forEach((el) => el.classList.add('visible'));
  // Also reveal word-by-word headline immediately
  const heroWords = document.querySelector<HTMLElement>('.hero-words');
  if (heroWords) {
    heroWords.querySelectorAll<HTMLElement>('.word').forEach((w) => {
      w.style.transitionDelay = '0s';
    });
    heroWords.classList.add('revealed');
  }
}

// ── Preloader ──
function initPreloader(): void {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  if (document.readyState === 'complete') {
    preloader.classList.add('loaded');
  } else {
    window.addEventListener('load', () => preloader.classList.add('loaded'), { once: true });
  }
}

// ── Hero Parallax (desktop pointer only) ──
function initHeroParallax(signal: AbortSignal): void {
  const hero = document.querySelector<HTMLElement>('.hero');
  if (!hero) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
          hero.style.transform = `translateY(${scrollY * 0.15}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true, signal });
}

// ── Magnetic Buttons (desktop pointer only) ──
function initMagneticButtons(signal: AbortSignal): void {
  document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    }, { signal });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    }, { signal });
  });
}

// ── Card Tilt (desktop pointer only) ──
function initCardTilt(signal: AbortSignal): void {
  document.querySelectorAll<HTMLElement>('.card').forEach((card) => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    }, { signal });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    }, { signal });
  });
}

// ── Timeline Sequential Reveal ──
function initTimelineAnimation(): void {
  document.querySelectorAll<HTMLElement>('.timeline').forEach((timeline) => {
    const items = Array.from(timeline.querySelectorAll<HTMLElement>('.timeline-item'));
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target as HTMLElement);
            setTimeout(() => {
              (entry.target as HTMLElement).classList.add('visible');
            }, idx * 120);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
    items.forEach((item) => observer.observe(item));
  });
}

// ── Staggered Grid Animation ──
function initStaggeredGrids(): void {
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((grid) => {
    const children = Array.from(
      grid.querySelectorAll<HTMLElement>(
        '.fade-in, .anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale-in'
      )
    );
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.07}s`;
            requestAnimationFrame(() => child.classList.add('visible'));
          });
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(grid);
  });
}

// ── Hero Word Reveal ──
function initWordReveal(): void {
  const el = document.querySelector<HTMLElement>('.hero-words');
  if (!el) return;
  const words = el.querySelectorAll<HTMLElement>('.word');
  words.forEach((word, i) => {
    word.style.transitionDelay = `${0.2 + i * 0.075}s`;
  });
  // Double rAF ensures the initial opacity:0 state is painted before transition fires
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.classList.add('revealed');
    });
  });
}

// ── Cursor Spotlight ──
function initCursorSpotlight(signal: AbortSignal): void {
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((section) => {
    section.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      section.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(0,123,255,0.07), transparent 55%)`;
    }, { signal });
    section.addEventListener('mouseleave', () => {
      section.style.background = '';
    }, { signal });
  });
}

// ── Mobile Nav ──
function initMobileNav(signal: AbortSignal): void {
  const btn = document.querySelector<HTMLButtonElement>('.nav-hamburger');
  const navLinks = document.querySelector<HTMLElement>('.nav-links');
  if (!btn || !navLinks) return;

  btn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    btn.classList.toggle('active', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  }, { signal });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    }, { signal });
  });
}

// ── Active Nav Link ──
function initActiveNavLink(): void {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.replace(/\/$/, '') || '/';
    const pagePath = currentPath.replace(/\/$/, '').replace(/\/index\.html$/, '') || '/';
    if (linkPath === pagePath || (linkPath !== '/' && pagePath.startsWith(linkPath))) {
      link.classList.add('active');
    }
  });
}

// ── Main Initialization ──
function initializeInteractions(): void {
  // Abort all listeners from the previous page before setting up new ones
  interactionController?.abort();
  interactionController = new AbortController();
  const { signal } = interactionController;

  if (prefersReducedMotion()) {
    skipAnimations();
    initPreloader();
    initMobileNav(signal);
    initActiveNavLink();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
  );

  document
    .querySelectorAll('.fade-in, .anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale-in')
    .forEach((el) => {
      if (el.closest('[data-stagger]')) return;
      observer.observe(el);
    });

  const heroSection = document.querySelector('.hero');
  if (heroSection) heroSection.classList.add('hero-animate');

  const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (isDesktopPointer) {
    initHeroParallax(signal);
    initCardTilt(signal);
    initMagneticButtons(signal);
    initCursorSpotlight(signal);
  }

  initPreloader();
  initWordReveal();
  initTimelineAnimation();
  initStaggeredGrids();
  initMobileNav(signal);
  initActiveNavLink();
}

// ── Turbo Lifecycle ──
document.addEventListener('turbo:before-render', () => {
  interactionController?.abort();
  interactionController = null;

  // Force-close mobile nav so it doesn't persist across Turbo navigations
  const navLinks = document.querySelector<HTMLElement>('.nav-links');
  const hamburger = document.querySelector<HTMLButtonElement>('.nav-hamburger');
  if (navLinks) navLinks.classList.remove('open');
  if (hamburger) {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('turbo:load', initializeInteractions);
