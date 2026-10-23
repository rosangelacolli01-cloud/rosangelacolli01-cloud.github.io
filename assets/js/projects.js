/**
 * projects.js — Carregamento e renderização dinâmica de projetos
 * Fonte da verdade: AGENTS.md §7 & SPECS.md §3.6
 */

import { getCurrentLang } from './i18n.js';

let projectsCache = null;

/**
 * Retorna as iniciais para o placeholder tipográfico
 */
function getInitials(title) {
  if (!title) return 'RC';
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}

/**
 * Cria a marcação SVG de link externo
 */
function externalIconSvg() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;
}

/**
 * Renderiza o estado vazio aprovado (§3.6-A)
 */
function renderEmptyState(container, lang) {
  const isPt = lang === 'pt';
  const title = isPt ? 'Projetos em construção' : 'Projects in progress';
  const desc = isPt
    ? 'Estou desenvolvendo meus primeiros projetos práticos em Python, dados e desenvolvimento web. Em breve eles serão publicados aqui.'
    : 'I am currently developing my first hands-on projects in Python, data, and web development. They will be featured here soon.';
  const ctaLabel = isPt ? 'Acompanhar no LinkedIn' : 'Follow on LinkedIn';

  container.innerHTML = `
    <div class="empty-state-card">
      <div class="empty-state-icon" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </div>
      <h3 class="empty-state-title font-display">${title}</h3>
      <p class="empty-state-desc">${desc}</p>
      <a href="https://www.linkedin.com/in/rosangelacolli" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
        <span>${ctaLabel}</span>
        ${externalIconSvg()}
        <span class="sr-only">${isPt ? 'abre em nova aba' : 'opens in a new tab'}</span>
      </a>
    </div>
  `;
}

/**
 * Renderiza o estado de erro amigável
 */
function renderErrorState(container, lang) {
  const isPt = lang === 'pt';
  const title = isPt ? 'Não foi possível carregar os projetos' : 'Unable to load projects';
  const desc = isPt
    ? 'Houve uma falha ao consultar os dados dos projetos. Tente recarregar a página.'
    : 'There was an issue loading the project data. Please try reloading the page.';

  container.innerHTML = `
    <div class="empty-state-card">
      <div class="empty-state-icon" style="color: var(--danger); background-color: rgba(248, 113, 113, 0.12);" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <h3 class="empty-state-title font-display">${title}</h3>
      <p class="empty-state-desc">${desc}</p>
    </div>
  `;
}

/**
 * Renderiza os cards de projetos
 */
function renderProjects(container, projects, lang) {
  if (!projects || projects.length === 0) {
    renderEmptyState(container, lang);
    return;
  }

  // Ordenação: featured primeiro, depois year decrescente
  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (b.year || '').localeCompare(a.year || '');
  });

  const demoLabel = lang === 'pt' ? 'Demo' : 'Demo';
  const repoLabel = lang === 'pt' ? 'Código' : 'Code';
  const externalA11y = lang === 'pt' ? 'abre em nova aba' : 'opens in a new tab';

  const cardsHtml = sorted
    .map((item) => {
      const title = (item.title && item.title[lang]) || (item.title && item.title.pt) || item.slug;
      const desc = (item.description && item.description[lang]) || (item.description && item.description.pt) || '';
      const year = item.year ? `<span class="project-card-year">${item.year}</span>` : '';

      // Media: imagem ou placeholder tipográfico
      let mediaHtml = '';
      if (item.image) {
        mediaHtml = `<img src="${item.image}" alt="${title}" class="project-card-img" loading="lazy" decoding="async">`;
      } else {
        mediaHtml = `<div class="project-placeholder" aria-hidden="true">${getInitials(title)}</div>`;
      }

      // Tags de stack
      const tagsHtml = Array.isArray(item.stack) && item.stack.length > 0
        ? `<ul class="project-tags">${item.stack.map((t) => `<li class="tag-item">${t}</li>`).join('')}</ul>`
        : '';

      // Links: demo e repo (só aparecem se existirem)
      let linksHtml = '';
      const hasDemo = item.links && item.links.demo;
      const hasRepo = item.links && item.links.repo;

      if (hasDemo || hasRepo) {
        linksHtml = `<div class="project-links">`;
        if (hasDemo) {
          linksHtml += `
            <a href="${item.links.demo}" target="_blank" rel="noopener noreferrer" class="project-link-item">
              <span>${demoLabel}</span>
              ${externalIconSvg()}
              <span class="sr-only">${title} — ${externalA11y}</span>
            </a>
          `;
        }
        if (hasRepo) {
          linksHtml += `
            <a href="${item.links.repo}" target="_blank" rel="noopener noreferrer" class="project-link-item">
              <span>${repoLabel}</span>
              ${externalIconSvg()}
              <span class="sr-only">${title} — ${externalA11y}</span>
            </a>
          `;
        }
        linksHtml += `</div>`;
      }

      return `
        <article class="project-card">
          <div class="project-card-media">
            ${mediaHtml}
          </div>
          <div class="project-card-body">
            <div class="project-card-header">
              <h3 class="project-card-title">${title}</h3>
              ${year}
            </div>
            <p class="project-card-desc">${desc}</p>
            ${tagsHtml}
            ${linksHtml}
          </div>
        </article>
      `;
    })
    .join('');

  container.innerHTML = cardsHtml;
}

/**
 * Inicializa a busca e renderização de projetos
 */
export async function initProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const renderCurrent = (lang) => {
    if (projectsCache !== null) {
      renderProjects(container, projectsCache, lang);
    }
  };

  // Escuta alteração de idioma para re-renderizar mantendo o estado
  window.addEventListener('languagechange', (event) => {
    const lang = event.detail ? event.detail.lang : getCurrentLang();
    renderCurrent(lang);
  });

  try {
    const response = await fetch('data/projects.json');
    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}`);
    }
    const data = await response.json();
    projectsCache = data.projects || [];
    renderProjects(container, projectsCache, getCurrentLang());
  } catch (err) {
    console.error('Erro ao buscar data/projects.json:', err);
    // Se falhar (ex: file:// sem servidor web), exibe estado amigável
    renderErrorState(container, getCurrentLang());
  }
}
