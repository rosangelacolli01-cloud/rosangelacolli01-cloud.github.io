/**
 * i18n.js — Gerenciador de Internacionalização (PT / EN)
 * Fonte da verdade: AGENTS.md §6 & SPECS.md §8.2
 */

const STORAGE_KEY = 'site-lang';
const DEFAULT_LANG = 'pt';
const SUPPORTED_LANGS = ['pt', 'en'];

const translationsCache = {};

/**
 * Retorna o idioma ativo salvo ou padrão
 */
export function getCurrentLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED_LANGS.includes(saved)) {
    return saved;
  }
  return DEFAULT_LANG;
}

/**
 * Busca o arquivo de traduções JSON
 */
async function fetchTranslations(lang) {
  if (translationsCache[lang]) {
    return translationsCache[lang];
  }

  try {
    const response = await fetch(`assets/i18n/${lang}.json`);
    if (!response.ok) {
      throw new Error(`Erro ao carregar i18n/${lang}.json: ${response.status}`);
    }
    const data = await response.json();
    translationsCache[lang] = data;
    return data;
  } catch (error) {
    console.error('Falha ao carregar traduções:', error);
    return null;
  }
}

/**
 * Atualiza o DOM com as strings traduzidas
 */
function applyTranslations(dict, lang) {
  if (!dict) return;

  // Atualiza atributo lang do html
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  // Atualiza title
  if (dict['meta.title']) {
    document.title = dict['meta.title'];
  }

  // Atualiza meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict['meta.description']) {
    metaDesc.setAttribute('content', dict['meta.description']);
  }

  // Atualiza elementos com data-i18n
  const textElements = document.querySelectorAll('[data-i18n]');
  textElements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Atualiza elementos com data-i18n-attr (ex: "aria-label:a11y.skip-link")
  const attrElements = document.querySelectorAll('[data-i18n-attr]');
  attrElements.forEach((el) => {
    const specs = el.getAttribute('data-i18n-attr').split(',');
    specs.forEach((spec) => {
      const [attr, key] = spec.trim().split(':');
      if (attr && key && dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  // Atualiza estado do botão de idioma
  const langButtons = document.querySelectorAll('[data-lang-btn]');
  langButtons.forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang-btn');
    const isActive = btnLang === lang;
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

/**
 * Troca o idioma da aplicação e notifica os ouvintes
 */
export async function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;

  localStorage.setItem(STORAGE_KEY, lang);
  const dict = await fetchTranslations(lang);

  if (dict) {
    applyTranslations(dict, lang);
  }

  // Notifica componentes dinâmicos (como projects.js)
  window.dispatchEvent(
    new CustomEvent('languagechange', {
      detail: { lang, dict }
    })
  );
}

/**
 * Inicializa a escuta de eventos nos botões de idioma e define o idioma inicial
 */
export async function initI18n() {
  const currentLang = getCurrentLang();

  // Configura listeners nos botões
  const langButtons = document.querySelectorAll('[data-lang-btn]');
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-btn');
      if (lang && lang !== getCurrentLang()) {
        setLanguage(lang);
      }
    });
  });

  // Se o idioma for EN, carrega as traduções de imediato
  // Se for PT, carrega o dicionário silenciosamente para ter em cache e assegurar sincronia
  if (currentLang === 'en') {
    await setLanguage('en');
  } else {
    // Garante cache do PT e ativações do seletor
    fetchTranslations('pt').then((dict) => {
      if (dict) applyTranslations(dict, 'pt');
    });
  }
}
