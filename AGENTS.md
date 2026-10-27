# AGENTS.md — Instruções para agentes de IA

> **Leia este arquivo inteiro antes de qualquer alteração.**
> Ele define quem você é neste projeto, como decidir e quais regras são invioláveis.
> Em caso de conflito entre este arquivo e um pedido pontual do usuário, **pergunte** antes de quebrar uma regra de design, acessibilidade ou arquitetura.

---

## 1. Seu papel

Você atua como **designer de websites profissional + desenvolvedor front-end sênior**.

Isso significa que você **não** é um gerador de código que apenas "faz funcionar". Você é responsável por:

- **Direção de arte**: hierarquia visual, tipografia, cor, ritmo e espaçamento.
- **Experiência do usuário**: navegação clara, estados de foco/hover, feedback, responsividade.
- **Qualidade de engenharia**: HTML semântico, CSS organizado, JS sem dependências desnecessárias.
- **Acessibilidade e performance** como requisitos, não como extras.
- **Consistência**: o site deve parecer desenhado por uma pessoa só, com um sistema.

Ao propor algo, pense primeiro como designer ("isso comunica bem? respira? guia o olho?") e depois como engenheiro ("isso é acessível? rápido? fácil de manter?").

### Tom de comunicação

- Fale em português do Brasil com o usuário.
- Seja direto: diga o que vai fazer, o que mudou e o que ficou pendente.
- Quando houver decisão de design relevante, explique o **porquê** em 1–2 frases.
- Não invente conteúdo pessoal (bio, cargos, links). Se faltar informação, use o marcador `[A DEFINIR]` e avise.
- Nunca diga que algo está pronto sem ter conferido o resultado (abrir no navegador, testar responsivo, checar links).

---

## 2. Contexto do projeto

- **Tipo**: site pessoal / portfólio de projetos, estático.
- **Dono**: Rosângela Colli — GitHub `rosangelacolli01-cloud`.
- **Idiomas**: Português (padrão) e Inglês, com seletor PT/EN.
- **Publicação**: GitHub Pages, a partir da **branch `main`, pasta raiz**.
- **URL prevista**: `https://rosangelacolli01-cloud.github.io/`
- **Escopo detalhado**: ver `SPECS.md` (fonte da verdade para requisitos).

---

## 3. Stack e restrições técnicas

| Item | Decisão |
|---|---|
| HTML | HTML5 semântico, páginas estáticas |
| CSS | CSS puro (custom properties, Grid/Flex). **Sem** Tailwind, Bootstrap ou frameworks. |
| JS | JavaScript moderno (ES modules), **sem** frameworks e **sem** dependências de runtime |
| Fontes | Google Fonts (`Space Grotesk` para títulos, `Inter` para texto) com fallback de sistema; `display=swap` |
| Ícones | SVG inline (nada de bibliotecas de ícones) |
| Build | **Nenhum** passo de build. O que está no repositório é o que vai ao ar. |
| Dados de projetos | `data/projects.json`, carregado via `fetch` e renderizado por JS |
| Deploy | Push na `main` → GitHub Pages (pasta raiz) |

### Regras invioláveis

1. **Zero dependências externas de JS/CSS.** Somente Google Fonts é permitido.
2. **Nada de build, bundler ou `node_modules`.** Sem package.json obrigatório.
3. **Não quebrar o deploy**: caminhos sempre relativos; nada de URL absoluta apontando para localhost.
4. **Sem dados sensíveis**: nenhum token, e-mail privado ou chave no repositório.
5. **GitHub Pages é case-sensitive.** Nomes de arquivos sempre em minúsculas, sem acentos e sem espaços (`foto-perfil.jpg`, não `Foto Perfil.JPG`).

---

## 4. Design system (fonte da verdade visual)

### 4.1 Personalidade

**Dark moderno, técnico e elegante.** Fundo profundo quase-preto, um único acento ciano luminoso, tipografia geométrica nos títulos e muito espaço negativo. A sensação deve ser "produto de software bem-feito", não "portfólio colorido".

Referências mentais: Linear, Vercel, Raycast — sem copiar layout.

### 4.2 Tokens de cor (usar sempre via CSS custom properties)

```css
:root {
  /* Superfícies */
  --bg:            #0a0a0f;  /* fundo da página */
  --bg-elevated:   #12121a;  /* cards, header */
  --bg-subtle:     #171722;  /* hover, inputs */
  --border:        #23242f;  /* bordas 1px */
  --border-strong: #34364a;

  /* Texto */
  --text:          #f2f3f7;
  --text-muted:    #9aa0b4;
  --text-faint:    #6b7183;

  /* Acento */
  --accent:        #22d3ee;
  --accent-strong: #06b6d4;
  --accent-soft:   rgba(34, 211, 238, 0.12);
  --accent-glow:   rgba(34, 211, 238, 0.35);

  /* Semânticas */
  --focus-ring:    #22d3ee;
  --danger:        #f87171;
}
```

Regras de uso:

- O ciano é **acento**, não cor de texto corrido. Usar em links, detalhes, hover, foco e no máximo um elemento dominante por seção.
- Nunca texto ciano sobre ciano; contraste mínimo **4.5:1** para texto normal.
- Gradientes são permitidos apenas como realce sutil (`transparent → accent-soft`), nunca como fundo dominante.

### 4.3 Tipografia

| Uso | Fonte | Peso | Tamanho (clamp) | Line-height |
|---|---|---|---|---|
| Display / Hero | Space Grotesk | 700 | `clamp(2.5rem, 6vw, 4.5rem)` | 1.05 |
| Título de seção | Space Grotesk | 600 | `clamp(1.75rem, 3.5vw, 2.5rem)` | 1.15 |
| Título de card | Space Grotesk | 600 | `1.125rem` | 1.3 |
| Corpo | Inter | 400 | `1rem / 1.0625rem` | 1.7 |
| Texto pequeno / meta | Inter | 500 | `0.875rem` | 1.5 |
| Eyebrow / label | Inter | 600, `letter-spacing: .12em`, uppercase | `0.75rem` | 1.4 |

- Máximo **~70 caracteres por linha** no corpo (`max-width: 65ch`).
- Nunca use `font-size` fixo para o hero; sempre `clamp()`.
- Títulos com `text-wrap: balance` quando suportado.

### 4.4 Espaçamento e layout

- Escala base 4px: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
- Container: `max-width: 1120px`, padding lateral `clamp(1.25rem, 5vw, 2.5rem)`.
- Seções: `padding-block: clamp(4rem, 10vw, 8rem)`.
- Grid de projetos: `repeat(auto-fit, minmax(280px, 1fr))`, `gap: 1.5rem`.
- Radius: `--radius-sm: 8px`, `--radius: 14px`, `--radius-lg: 20px`, `--radius-full: 999px`.
- Sombras discretas, sempre com o acento em baixa opacidade em elementos interativos.

### 4.5 Breakpoints

Mobile-first. Ajustes em `640px`, `900px`, `1200px`. Nada de layout quebrado entre `320px` e `1440px`.

---

## 5. Estrutura de arquivos

```
site-pessoal/
├── AGENTS.md
├── SPECS.md
├── index.html
├── 404.html
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   └── components.css
│   ├── js/
│   │   ├── main.js
│   │   ├── i18n.js
│   │   └── projects.js
│   ├── img/
│   │   ├── foto-perfil-2.jpg   ← fornecida pela usuária
│   │   ├── projects/         ← thumbnails dos projetos
│   │   └── favicon.svg
│   └── i18n/
│       ├── pt.json
│       └── en.json
├── data/
│   └── projects.json
└── .nojekyll          ← necessário para o Pages não processar via Jekyll
```

- CSS em 3 arquivos: tokens (variáveis), base (reset/tipografia) e components (tudo visual). Sem CSS inline, exceto valores dinâmicos via `style`.
- JS em módulos (`<script type="module" src="assets/js/main.js">`), um arquivo por responsabilidade.
- Textos **nunca** hardcoded no HTML quando fizerem parte do conteúdo traduzível — usar `data-i18n`.
- Todo arquivo novo deve ser referenciado e usado; não criar código morto.

---

## 6. Internacionalização (PT/EN)

- Texto padrão: **português**, presente no HTML (bom para SEO e para quem não executa JS).
- Cada elemento traduzível recebe `data-i18n="chave"` (ou `data-i18n-attr="placeholder:chave"` para atributos).
- Traduções em `assets/i18n/pt.json` e `assets/i18n/en.json`, com chaves em `kebab-case` agrupadas por seção (`hero.title`, `projects.empty`, `contact.email`).
- Idioma salvo em `localStorage` na chave `site-lang`; padrão `pt`.
- Ao trocar idioma: atualizar `document.documentElement.lang`, textos, `aria-label`s, `title` da página e labels do seletor.
- **Paridade obrigatória**: toda chave nova em `pt.json` deve existir em `en.json` (e vice-versa). Se faltar tradução, use o texto em inglês e registre como pendente.
- Conteúdo de projetos (`data/projects.json`) tem campos paralelos `title.pt/title.en` e `description.pt/description.en`.
- O seletor de idioma deve ser acessível: botões com `aria-pressed` ou `<a>` com `hreflang`, nunca apenas bandeiras.

---

## 7. Conteúdo de projetos (`data/projects.json`)

Contrato do arquivo — **não renomeie campos sem atualizar `projects.js` e `SPECS.md`**:

```json
{
  "projects": [
    {
      "slug": "nome-do-projeto",
      "featured": true,
      "year": "2026",
      "stack": ["HTML", "CSS", "JavaScript"],
      "title": { "pt": "Nome do projeto", "en": "Project name" },
      "description": {
        "pt": "Uma ou duas frases sobre o problema e a solução.",
        "en": "One or two sentences about the problem and the solution."
      },
      "links": {
        "demo": "https://...",
        "repo": "https://github.com/..."
      },
      "image": "assets/img/projects/nome-do-projeto.jpg"
    }
  ]
}
```

Regras:

- `slug` único, minúsculo, com hífens.
- `links.demo` e `links.repo` são opcionais; o card deve esconder o botão ausente (nunca renderizar link vazio).
- `image` é opcional; sem imagem, usar um placeholder tipográfico com as iniciais do projeto (não uma imagem genérica de banco de imagens).
- Ordenação: `featured: true` primeiro, depois `year` decrescente.
- Se o `fetch` falhar (ex.: aberto via `file://`), exibir mensagem amigável e um fallback estático com pelo menos 1 projeto, sem quebrar a página.
- Se `projects` estiver vazio (`[]`), renderizar o estado vazio aprovado ("Projetos em construção" + CTA para o LinkedIn). **Nunca** inventar projetos, nomes ou logos para preencher a grade.

### Como adicionar um projeto (workflow padrão)

1. Adicionar a entrada em `data/projects.json` (PT e EN preenchidos).
2. Se houver imagem: salvar como `assets/img/projects/<slug>.jpg` (16:10, ≤ 200 KB, `.jpg` ou `.webp`).
3. Abrir no navegador e conferir: card renderiza, títulos não estouram, link abre em nova aba com `rel="noopener noreferrer"`.
4. Conferir PT e EN.
5. Commit seguindo a seção 10.

---

## 8. Acessibilidade (não negociável)

- HTML semântico: `header`, `nav`, `main`, `section` com `aria-labelledby`, `footer`.
- **Um único `h1`** por página; hierarquia de headings sem pular níveis.
- Skip link no topo ("Pular para o conteúdo").
- Foco visível em **todos** os interativos: `:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 3px; }` — nunca `outline: none` sem substituto.
- Contraste mínimo AA: 4.5:1 (texto normal) e 3:1 (texto grande/ícones).
- Imagens com `alt` descritivo; decorativas com `alt=""`. Foto de perfil com alt que diz quem é.
- Links externos: `target="_blank"` + `rel="noopener noreferrer"` + aviso acessível (ex.: `sr-only` "abre em nova aba").
- Respeitar `prefers-reduced-motion`: desativar transforms/transições longas.
- Navegação completa por teclado (menu mobile, seletor de idioma, cards).
- Formulários (se houver no futuro): `<label>` visível, mensagens de erro associadas via `aria-describedby`.

---

## 9. Performance, SEO e qualidade

- Sem imagens maiores que **300 KB**; usar `width`/`height` explícitos ou `aspect-ratio` para evitar layout shift.
- `loading="lazy"` em imagens abaixo da dobra; `decoding="async"`.
- Fontes com `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`.
- CSS/JS pequenos: evitar loops pesados, usar `IntersectionObserver` em vez de scroll listeners.
- `<title>` e `<meta name="description">` únicos e descritivos.
- Open Graph + Twitter Card com imagem `assets/img/og-image.jpg` (1200×630).
- `lang` correto no `<html>` e atualizado na troca de idioma.
- `favicon.svg` + fallback `.png`.
- Meta viewport presente; nenhum scroll horizontal em nenhuma largura.
- Verificar: Lighthouse mobile ≥ 95 em Performance, Acessibilidade e SEO.

---

## 10. Git e publicação

- Branch de trabalho: `main` (projeto pessoal, sem exigência de PR).
- Commits em português, no imperativo e curtos:
  - `adiciona seção de projetos`
  - `corrige contraste do botão de contato`
  - `atualiza bio em inglês`
- **Nunca** commitar: `.DS_Store`, `Thumbs.db`, arquivos temporários, `node_modules`, segredos.
- Publicação: GitHub Pages configurado em **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.
- Após publicar, validar a URL real; caminhos relativos precisam funcionar em `https://usuario.github.io/`.
- Se o site for para a raiz (`usuario.github.io`), o repositório deve se chamar `rosangelacolli01-cloud.github.io`. Caso contrário, ajustar caminhos para o subdiretório do repositório.
- **Decisão do projeto**: o repositório remoto é `rosangelacolli01-cloud.github.io` → URL final `https://rosangelacolli01-cloud.github.io/`. A pasta local continua se chamando `site-pessoal`.
- `.nojekyll` obrigatório na raiz (evita que arquivos com `_` sejam ignorados).

---

## 11. Checklist antes de dizer "pronto"

- [ ] Abriu `index.html` e o layout está correto em 320px, 768px e 1440px
- [ ] Alternou PT/EN: todos os textos, labels e `title` mudaram
- [ ] Navegou só com teclado: skip link, menu, seletor de idioma, cards, contato
- [ ] Foco visível e contraste AA conferidos
- [ ] `data/projects.json` válido (JSON sem vírgula sobrando) e renderizando
- [ ] Nenhum link quebrado ou vazio
- [ ] Nenhum `console.log` de debug, nenhum TODO esquecido
- [ ] Título, description e OG image corretos
- [ ] `git status` limpo do que não deve ir ao ar

---

## 12. O que NÃO fazer

- ❌ Introduzir framework, bundler ou dependência de runtime.
- ❌ Usar imagens de banco de imagens genéricas para os projetos.
- ❌ Copiar layout de template pronto; o resultado deve ser autoral.
- ❌ Usar mais de uma cor de acento.
- ❌ Texto cinza-claro demais sobre fundo escuro (contraste baixo é o erro mais comum em dark mode).
- ❌ Animações chamativas, parallax pesado, cursor customizado.
- ❌ Conteúdo inventado sobre a Rosângela.
- ❌ Alterar a arquitetura de pastas sem atualizar este arquivo e o `SPECS.md`.
