/**
 * main.js — Ponto de entrada da aplicação
 * Fonte da verdade: AGENTS.md §5 & SPECS.md §8.2
 */

import { initI18n } from './i18n.js';
import { initProjects } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa internacionalização e projetos
  initI18n();
  initProjects();

  // 2. Atualiza ano do rodapé dinamicamente
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 3. Header com sombra e borda ao rolar (utilizando requestAnimationFrame para alta performance)
  const header = document.querySelector('.site-header');
  if (header) {
    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (window.scrollY > 20) {
              header.classList.add('scrolled');
            } else {
              header.classList.remove('scrolled');
            }
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // 4. Animações de entrada sutis (IntersectionObserver)
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      reveals.forEach((el) => el.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -50px 0px',
          threshold: 0.1
        }
      );

      reveals.forEach((el) => revealObserver.observe(el));
    }
  }

  // 5. Marcação de seção ativa na navegação
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length > 0 && navLinks.length > 0 && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px'
      }
    );

    sections.forEach((sec) => navObserver.observe(sec));
  }
});
