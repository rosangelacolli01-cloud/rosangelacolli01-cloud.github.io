# SPECS.md — Especificação do projeto

**Projeto:** Site pessoal / portfólio de projetos
**Dona:** Rosângela Colli (`rosangelacolli01-cloud`)
**Repositório:** `rosangelacolli01-cloud.github.io` (pasta raiz do GitHub Pages)
**Versão do documento:** 1.0 — planejamento
**Status:** conteúdo base coletado do LinkedIn; pendente aprovação de textos e lista de projetos
**Última atualização:** 2026-10-23

> Documento de requisitos. Regras de conduta e design system detalhado estão em `AGENTS.md`.

---

## 1. Visão

Um site pessoal estático, rápido e visualmente marcante, que apresenta a Rosângela e seus projetos de forma clara para recrutadores, colegas e clientes. Deve funcionar perfeitamente em português e inglês, carregar em menos de 2 segundos em 4G e não exigir nenhuma manutenção técnica além de editar um arquivo de dados ao adicionar um projeto.

### 1.1 Objetivos

1. Comunicar em **5 segundos** quem é a Rosângela e o que ela faz.
2. Exibir projetos com contexto (problema, solução, stack, link) — não apenas uma galeria.
3. Facilitar o contato (e-mail e redes) sem formulário/backend.
4. Demonstrar competência técnica pelo próprio site: semântica, acessibilidade, performance.
5. Ser sustentável: adicionar um projeto = editar `data/projects.json` + commit.

### 1.2 Não objetivos (fora de escopo nesta versão)

- Blog, CMS, área administrativa, login.
- Formulário de contato com backend.
- Comentários, analytics invasivo, cookies de marketing.
- Tema claro, múltiplos temas ou customização pelo visitante.
- Internacionalização além de PT e EN.
- Página de detalhe individual por projeto.

---

## 2. Público

| Perfil | O que busca | Como o site atende |
|---|---|---|
| Recrutador técnico | Stack, senioridade, links verificáveis | Hero objetivo + cards com stack e repo |
| Recrutador de RH | Clareza, contato rápido | Texto direto, e-mail visível |
| Cliente freelancer | Prova de entrega | Cards com demo ao vivo |
| Colega / comunidade | Descoberta e networking | Links sociais no rodapé/contato |

---

## 3. Persona e conteúdo

### 3.1 Dados coletados (LinkedIn, 2026-10-23)

| Campo | Valor |
|---|---|
| Nome completo exibido | **Rosângela Colli** |
| Headline (LinkedIn) | Estudante de Ciência da Computação \| Análise de Dados \| Python \| Inteligência Artificial \| Tecnologia e Programação \| Em busca de desenvolvimento profissional |
| Título sugerido para o Hero | **Estudante de Ciência da Computação & Análise de Dados** |
| Localização | Passo Fundo, Rio Grande do Sul, Brasil |
| Bio (PT, aprovada) | Ver §3.4 |
| Bio (EN, aprovada) | Ver §3.4 |
| E-mail | `collirosangela@hotmail.com` — **aprovado para publicação** |
| LinkedIn | `https://www.linkedin.com/in/rosangelacolli` |
| GitHub | `https://github.com/rosangelacolli01-cloud` |
| Foto de perfil | `assets/img/foto-perfil.jpg` — **salva** (600×600, 46 KB) |
| Projetos | **Nenhum ainda** — ver §3.6 |

#### Dados privados — NÃO publicar

Coletados da seção "Dados de contato" e **excluídos do site** por padrão:

- Telefone celular
- Endereço residencial
- Data de nascimento

> Regra: nenhum dado inventado. Enquanto o valor não existir, o site deve exibir `[A DEFINIR]` e o item correspondente **não** deve ser publicado com link quebrado. Dados privados só entram no site com autorização explícita.

### 3.2 Trajetória (referência para o texto do site)

**Experiência profissional**

| Cargo | Empresa | Período | Local |
|---|---|---|---|
| Gestora Administrativa | RE/MAX Perfeccta | fev/2017 – atual (9 anos e 9 meses) | Passo Fundo, RS |

**Formação acadêmica**

| Curso | Instituição | Período |
|---|---|---|
| Ciência da Computação (diploma) | Universidade Atitus (Atitus Educação) | ago/2026 – dez/2029 |

**Competências declaradas**: nenhuma cadastrada no LinkedIn. A stack inicial do site deve ser derivada do headline e validada com a usuária: Python, Análise de Dados, Inteligência Artificial, Lógica de Programação, Banco de Dados.

**Certificações, idiomas e projetos no LinkedIn**: nenhum cadastrado.

### 3.3 Observações de posicionamento

- O perfil combina **gestão administrativa (9+ anos)** com **transição para tecnologia** — isso é um diferencial, não um ruído. O Hero deve comunicar a transição com segurança, sem parecer "iniciante sem experiência".
- Público-alvo principal: recrutadores de **estágio / posição inicial** em tecnologia, dados e IA.
- Evitar tom de "em busca de desenvolvimento profissional" (genérico). Preferir algo concreto: "em busca de estágio em dados e desenvolvimento".

### 3.4 Textos base

**Bio PT (rascunho, 3 frases)**

> Sou estudante de Ciência da Computação na Universidade Atitus, com interesse em análise de dados, Python e inteligência artificial. Venho construindo base em lógica de programação, banco de dados e resolução de problemas, aplicando o aprendizado acadêmico em projetos práticos. Busco uma oportunidade de estágio ou posição inicial em tecnologia para aprender com equipes experientes e contribuir com organização, comunicação e foco em resultado — habilidades que desenvolvo há mais de oito anos na gestão administrativa.

**Bio EN (rascunho para revisão)**

> I'm a Computer Science student at Universidade Atitus with a strong interest in data analysis, Python and artificial intelligence. I'm building a solid foundation in programming logic, databases and problem solving, applying what I learn to hands-on projects. I'm looking for an internship or entry-level role in tech where I can learn from experienced teams and contribute with organization, communication and a results-driven mindset built over eight years in administrative management.

**Subtítulo do Hero (curto)**

- PT: `Dados, Python e IA — em transição da gestão para a tecnologia`
- EN: `Data, Python & AI — moving from management into tech`

### 3.5 Tom de voz

- 1ª pessoa, direto, sem clichês ("apaixonada por tecnologia", "sinergia").
- Frases curtas; foco em **o que faz** e **o que entrega**.
- PT-BR natural e EN idiomático (não tradução literal).

### 3.6 Projetos — situação e plano

A usuária **ainda não tem projetos** publicados (GitHub com 0 repositórios, LinkedIn sem seção de projetos).

Decisão: o site **não pode ir ao ar com a seção de projetos vazia**, mas também não deve inventar projetos. Duas frentes:

**A. Enquanto não houver projetos reais**

- A seção `#projetos` exibe um estado vazio honesto e bem desenhado:
  - Título: "Projetos em construção" / "Projects in progress"
  - Texto: "Estou desenvolvendo meus primeiros projetos. Em breve, eles aparecem aqui."
  - CTA para o LinkedIn (onde as atualizações serão anunciadas)
- **Não** usar cards falsos, placeholders com nomes inventados ou imagens genéricas.
- O JSON fica com `projects: []` e o JS renderiza o estado vazio.

**B. Projetos iniciais sugeridos** (a construir durante a Fase 1, para dar substância ao portfólio)

| # | Projeto | O que demonstra | Stack |
|---|---|---|---|
| 1 | **Análise exploratória de dados** — dataset público (ex.: dados abertos de Passo Fundo/IBGE) com limpeza, indicadores e gráficos | Python, pandas, visualização, storytelling com dados | Python, pandas, matplotlib/plotly |
| 2 | **Dashboard web estático** — visualização dos resultados do projeto 1 publicada como página | HTML, CSS, JS, consumo de JSON/CSV | HTML/CSS/JS |
| 3 | **Automação administrativa** — script que organiza/renomeia arquivos ou gera relatórios a partir de planilhas | Resolução de problema real, experiência de gestão aplicada | Python, openpyxl |

> Cada projeto concluído deve virar um repositório público com README, e então uma entrada em `data/projects.json`.
> Enquanto não houver pelo menos 2 projetos concluídos, vale publicar o site com o estado vazio (opção A) — o Hero e o Contato já sustentam a apresentação.

**Decisão (2026-10-23): seguir com A — publicar com estado vazio.** Os projetos iniciais de B ficam como backlog, a construir depois do primeiro deploy. A seção `#projetos` precisa, portanto, nascer com o estado vazio bem resolvido e o restante do site não pode parecer "incompleto".

---

## 4. Arquitetura de informação

Página única (`index.html`) com navegação por âncoras.

```
Header fixo (sticky)
├── Monograma "RC" (link para #inicio)
├── Navegação: Projetos · Contato
└── Seletor de idioma: PT | EN

main
├── #inicio   Hero
│   ├── Eyebrow (disponibilidade / área)
│   ├── H1 (nome)
│   ├── Subtítulo (título profissional)
│   ├── Bio curta (1 parágrafo)
│   ├── CTAs: "Ver projetos" (primário) · "Entrar em contato" (secundário)
│   └── Foto com moldura/glow ciano (opcional em mobile: abaixo do texto)
│
├── #projetos  Projetos
│   ├── Eyebrow + H2 + subtítulo curto
│   └── Grid de cards (renderizado de data/projects.json)
│       ├── imagem/placeholder
│       ├── título + ano
│       ├── descrição (2 linhas, clamp)
│       ├── tags de stack
│       └── links: Demo ↗ · Código ↗
│
└── #contato  Contato
    ├── H2 + frase de chamada
    ├── Botão/link de e-mail em destaque
    └── Links: GitHub · LinkedIn · [outros]

footer
├── © 2026 [nome]
└── "Feito com HTML, CSS e JS"
```

- Sem menu mobile complexo: em telas pequenas, a navegação vira uma barra compacta (2 links + idioma) — **não** hambúrguer, a menos que os links cresçam.
- `404.html` simples, com link de volta para a home.

---

## 5. Requisitos funcionais

| ID | Requisito | Prioridade |
|---|---|---|
| RF-01 | Página única com Hero, Projetos e Contato, navegável por âncoras com scroll suave (respeitando `prefers-reduced-motion`) | Must |
| RF-02 | Header sticky com fundo translúcido e borda sutil ao rolar | Should |
| RF-03 | Projetos renderizados dinamicamente de `data/projects.json` | Must |
| RF-04 | `fetch` com fallback: em erro, mensagem amigável + conteúdo estático mínimo | Must |
| RF-04a | Com `projects: []`, renderizar estado vazio traduzido ("Projetos em construção") com CTA para o LinkedIn | Must |
| RF-05 | Links de demo/repo ocultos quando ausentes | Must |
| RF-06 | Seletor PT/EN com persistência em `localStorage` e atualização de `<html lang>`, `<title>` e meta description | Must |
| RF-07 | Conteúdo em PT presente no HTML (funciona sem JS) | Must |
| RF-08 | E-mail via `mailto:` com assunto pré-preenchido | Must |
| RF-09 | Links externos abrem em nova aba com `rel="noopener noreferrer"` e aviso acessível | Must |
| RF-10 | Indicação de seção ativa na navegação (IntersectionObserver) | Could |
| RF-11 | Ano do rodapé gerado por JS | Could |
| RF-12 | Botão "voltar ao topo" | Won't (v1) |

---

## 6. Requisitos não funcionais

### 6.1 Performance

- Peso total da primeira visita ≤ **500 KB** (incluindo fontes; sem contar imagem de projeto).
- LCP < 2,0 s em 4G simulado; CLS < 0,05; INP < 200 ms.
- Lighthouse mobile ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO.
- Sem bloqueio de renderização por JS; scripts com `type="module"` (deferido por padrão).
- Fontes: 2 famílias, no máximo 4 pesos no total.

### 6.2 Acessibilidade

- WCAG 2.1 nível AA.
- Navegação completa por teclado, foco visível, skip link.
- Contraste 4.5:1 para texto, 3:1 para elementos gráficos.
- `prefers-reduced-motion` respeitado.
- Zoom de 200% sem perda de conteúdo.

### 6.3 Compatibilidade

- Últimas 2 versões de Chrome, Edge, Firefox e Safari; Safari iOS 16+.
- Funcional sem JS para o conteúdo essencial (texto e contato).
- Larguras de 320px a 1920px.

### 6.4 SEO

- `<title>`: `[Nome] — [Título profissional]` (PT) / `[Nome] — [Professional title]` (EN).
- Meta description ~150 caracteres por idioma.
- Open Graph + Twitter Card + `og-image.jpg` 1200×630.
- Dados estruturados JSON-LD `Person` (nome, url, sameAs).
- `sitemap.xml` e `robots.txt` simples.
- URLs canônicas e `hreflang` (pt-BR / en) se o site for publicado com paths distintos — não necessário na v1 com toggle client-side; avaliar depois.

---

## 7. Design

### 7.1 Direção

Dark moderno, técnico, elegante. Preto profundo, acento ciano `#22d3ee`, tipografia geométrica, espaçamento generoso. Um único destaque por seção. Sem gradientes chamativos, sem glassmorphism exagerado, sem ilustrações 3D.

### 7.2 Tokens

Definidos integralmente em `AGENTS.md` §4.2–4.4 (cores, tipografia, espaçamento, radius, breakpoints). Este documento não duplica valores: `AGENTS.md` é a fonte da verdade.

### 7.3 Componentes

| Componente | Descrição | Estados |
|---|---|---|
| `Header` | Sticky, fundo `--bg` com 80% opacidade + blur, borda inferior ao rolar | top / scrolled |
| `Monograma` | Bloco com "RC" em Space Grotesk 700, borda 1px acento | hover com glow |
| `NavLink` | Texto pequeno, muted | hover branco, ativo acento |
| `LangToggle` | PT \| EN, item ativo em acento, `aria-pressed` | hover, foco |
| `ButtonPrimary` | Fundo ciano, texto `#0a0a0f`, radius full/pill | hover mais claro, active escala 0.98 |
| `ButtonGhost` | Borda `--border-strong`, fundo transparente | hover borda acento |
| `SectionHeading` | Eyebrow + H2 + subtítulo opcional | — |
| `ProjectCard` | Superfície `--bg-elevated`, borda 1px, radius 14px, hover eleva 2px + borda acento | default, hover, focus-within |
| `Tag` | Pill pequena, fundo `--bg-subtle`, texto muted | — |
| `SocialLink` | Ícone SVG 20px + label opcional | hover acento |
| `Footer` | Texto pequeno, muted, borda superior | — |

### 7.4 Microinterações

- Entrada de seções: fade + 8px de subida, 400ms, `cubic-bezier(.2,.7,.3,1)`, via IntersectionObserver, uma única vez.
- Hover de card: `transform: translateY(-2px)` + `border-color` + glow suave, 180ms.
- Botões: 150ms.
- **Tudo desativado** em `prefers-reduced-motion: reduce`.

---

## 8. Arquitetura técnica

### 8.1 Estrutura de arquivos

Ver `AGENTS.md` §5 (fonte da verdade). Resumo:

```
index.html · 404.html · .nojekyll
assets/css/{tokens,base,components}.css
assets/js/{main,i18n,projects}.js
assets/i18n/{pt,en}.json
assets/img/… · data/projects.json
```

### 8.2 Fluxo de dados

1. HTML carrega com conteúdo PT estático (sem flash de conteúdo vazio).
2. `main.js` inicializa: ano do footer, header scrolled, reveal animations.
3. `i18n.js` lê `localStorage['site-lang']` (default `pt`); se `en`, busca `assets/i18n/en.json` e aplica em `[data-i18n]`.
4. `projects.js` faz `fetch('data/projects.json')`, valida, ordena (`featured` → `year` desc) e renderiza os cards no idioma ativo.
5. Troca de idioma re-renderiza textos e cards.

### 8.3 Contratos

- `data/projects.json`: definido em `AGENTS.md` §7.
- `assets/i18n/*.json`: objeto plano `chave: string`, sem aninhamento (facilita lookup e diff).
- Elementos traduzíveis: `data-i18n="chave"`; atributos: `data-i18n-attr="placeholder:chave"`.

---

## 9. Publicação (GitHub Pages)

1. Repositório público: **`github.com/rosangelacolli01-cloud/rosangelacolli01-cloud.github.io`**.
2. URL final: **`https://rosangelacolli01-cloud.github.io/`** (raiz, sem subpasta).
3. Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`.
4. `.nojekyll` na raiz.
5. Sem workflow de Actions (deploy direto por branch).
6. HTTPS forçado.
7. Verificação pós-deploy: home, 404, troca de idioma, cards, links externos, mobile.
8. A pasta local continua `site-pessoal`; apenas o repositório remoto usa o nome `rosangelacolli01-cloud.github.io`.

### 9.1 Processo de atualização de projeto

1. Editar `data/projects.json` (PT + EN).
2. Adicionar imagem em `assets/img/projects/<slug>.jpg` (16:10, ≤200 KB) — opcional.
3. Testar localmente (`python -m http.server` ou Live Server — **não** abrir via `file://`, pois o `fetch` falha).
4. Commit + push na `main`.
5. Aguardar 1–2 min e validar a URL pública.

---

## 10. Critérios de aceite

- [ ] As três seções existem e são alcançáveis pela navegação, com âncoras corretas.
- [ ] Em 320px não há scroll horizontal; textos não estouram cards.
- [ ] Troca PT/EN altera **100%** dos textos visíveis, `lang`, `title` e description; preferência persiste após recarregar.
- [ ] Nenhuma string `[A DEFINIR]` visível em produção (bloquear publicação).
- [ ] Projetos renderizam a partir do JSON; card sem imagem usa placeholder tipográfico; link ausente não aparece.
- [ ] Com `projects: []`, a seção mostra o estado vazio traduzido, sem cards ou dados inventados, e o CTA do LinkedIn funciona.
- [ ] Erro de `fetch` mostra mensagem amigável e não quebra o layout.
- [ ] Teclado: skip link → nav → idioma → CTAs → cards → contato, com foco visível em tudo.
- [ ] Axe DevTools: 0 violações críticas/sérias.
- [ ] Lighthouse mobile ≥ 95 em Performance, Acessibilidade e SEO.
- [ ] Links externos com `rel="noopener noreferrer"`.
- [ ] `mailto:` abre o cliente de e-mail com assunto preenchido.
- [ ] 404.html estilizado e com retorno à home.
- [ ] Página publicada em `https://rosangelacolli01-cloud.github.io/` carregando assets corretamente.

---

## 11. Roadmap

| Fase | Entrega |
|---|---|
| 0. Conteúdo | Respostas de nome, título, bio, e-mail, LinkedIn, foto e projetos |
| 1. Fundação | HTML semântico + tokens CSS + reset + tipografia |
| 2. Seções | Header, Hero, Projetos (estático), Contato, Footer |
| 3. Dados | `projects.json`, renderização JS, estados vazios/erro |
| 4. i18n | `pt.json`/`en.json`, toggle, persistência |
| 5. Polimento | Animações, SEO/OG, favicon, 404, acessibilidade |
| 6. Deploy | Git init, GitHub, Pages, validação final |

### 11.1 Pendências bloqueantes

- [x] Nome, headline, localização e trajetória (coletados do LinkedIn)
- [x] Foto de perfil (`assets/img/foto-perfil.jpg`, 600×600)
- [x] Bios PT/EN aprovadas (§3.4)
- [x] E-mail de publicação definido: `collirosangela@hotmail.com`
- [x] Nome do repositório: `rosangelacolli01-cloud.github.io`
- [x] Skills: **não haverá seção de skills**; stack aparece apenas como tags nos cards de projeto
- [x] Projetos: publicar com **estado vazio** (§3.6-A); projetos iniciais ficam no backlog
- [ ] Fornecer 2–6 projetos reais quando existirem (editar `data/projects.json`)

---

## 12. Riscos e mitigação

| Risco | Impacto | Mitigação |
|---|---|---|
| `fetch` falha em `file://` | Cards não aparecem no teste local | Servir por HTTP local; fallback estático no HTML/JS |
| GitHub Pages ignora arquivos com `_` | Assets somem | `.nojekyll` na raiz |
| Falta de conteúdo real | Publicação com placeholders | Checklist bloqueante §10/§11.1 |
| Paths absolutos no deploy | 404 em assets | Caminhos relativos sempre |
| Dark mode com contraste baixo | Falha de acessibilidade | Tokens fixos + axe no checklist |
| i18n incompleto | Textos misturados | Paridade de chaves obrigatória |
