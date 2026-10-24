# Rosângela Colli — Portfólio Pessoal

> Site pessoal e portfólio profissional de projetos desenvolvido com foco em alta performance, acessibilidade e design minimalista.

🌐 **Acesse ao vivo:** [rosangelacolli01-cloud.github.io](https://rosangelacolli01-cloud.github.io/)

---

## 📌 Visão Geral

Este projeto foi construído para apresentar minha trajetória, competências e projetos práticos nas áreas de Ciência da Computação, Análise de Dados e Inteligência Artificial.

O projeto segue princípios de **engenharia limpa e sem dependências** (*zero dependencies*), sem necessidade de etapas de compilação ou empacotamento (*build steps*). O código fonte presente no repositório é exatamente o mesmo servido e executado no navegador.

---

## 🚀 Tecnologias e Arquitetura

| Camada | Escolha Técnica |
|---|---|
| **HTML** | HTML5 semântico, landmarks acessíveis e metadados Open Graph / Twitter / Schema JSON-LD |
| **CSS** | CSS puro modular (Custom Properties, Flexbox e CSS Grid), sem frameworks |
| **JavaScript** | ES Modules nativos, sem bibliotecas externas de runtime |
| **Tipografia** | Google Fonts ([Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) para títulos e [Inter](https://fonts.google.com/specimen/Inter) para corpo) |
| **Ícones** | SVG inline otimizado |
| **Deploy** | GitHub Pages a partir da branch `main` |

---

## ✨ Destaques de Implementação

- 🌐 **Internacionalização nativa (i18n):** Alternância completa entre Português (PT-BR) e Inglês (EN) com persistência da preferência em `localStorage` e sincronização de atributos acessíveis e meta tags.
- ♿ **Acessibilidade (WCAG 2.1 AA):** Navegação por teclado, skip links, foco visível com anéis de alto contraste, textos alternativos descritivos e respeito integral a `prefers-reduced-motion`.
- ⚡ **Alta Performance:** Carregamento ultra rápido, zero bloqueio de renderização por scripts externos e sem dependências pesadas.
- 📦 **Gestão de Projetos Orientada a Dados:** Projetos carregados dinamicamente via `data/projects.json`, com estado vazio (*empty state*) elegante e suporte a fallbacks offline.

---

## 📂 Estrutura de Arquivos

```
rosangelacolli01-cloud.github.io/
├── index.html              # Página principal com conteúdo base em HTML semântico
├── 404.html                # Página customizada de erro 404
├── robots.txt              # Diretrizes para indexadores de busca
├── sitemap.xml             # Mapa do site para SEO
├── .nojekyll               # Desativa processamento Jekyll no GitHub Pages
├── data/
│   └── projects.json       # Base de dados dos projetos (PT/EN, tags, links)
└── assets/
    ├── css/
    │   ├── tokens.css      # Variáveis de cor, tipografia e espaçamento
    │   ├── base.css        # Reset, tipografia fluida e fundamentos a11y
    │   └── components.css  # Componentes visuais (hero, header, cards, contato)
    ├── js/
    │   ├── main.js         # Ponto de entrada, animações e observadores
    │   ├── i18n.js         # Gerenciamento de idiomas e traduções
    │   └── projects.js     # Consumo e renderização dinâmica de projetos
    ├── i18n/
    │   ├── pt.json         # Dicionário em Português
    │   └── en.json         # Dicionário em Inglês
    └── img/
        ├── favicon.svg     # Favicon em formato vetorial
        └── foto-perfil.jpg # Fotografia profissional de perfil
```

---

## 💻 Como Executar Localmente

Como o projeto faz requisições assíncronas (`fetch`) para carregar os arquivos de tradução (`pt.json` / `en.json`) e de projetos (`projects.json`), recomenda-se executá-lo através de um servidor HTTP local:

1. Clone o repositório:
   ```bash
   git clone https://github.com/rosangelacolli01-cloud/rosangelacolli01-cloud.github.io.git
   cd rosangelacolli01-cloud.github.io
   ```

2. Inicie um servidor local simples:
   - **Com Python 3:**
     ```bash
     python -m http.server 8000
     ```
   - **Ou com a extensão Live Server** no Visual Studio Code.

3. Acesse `http://localhost:8000` no seu navegador.

---

## 📝 Como Adicionar um Novo Projeto

Para adicionar um projeto ao portfólio:

1. Abra o arquivo `data/projects.json`.
2. Adicione um novo objeto na lista `projects` seguindo a estrutura:
   ```json
   {
     "slug": "nome-do-projeto",
     "featured": true,
     "year": "2026",
     "stack": ["Python", "Pandas", "Streamlit"],
     "title": {
       "pt": "Título do Projeto",
       "en": "Project Title"
     },
     "description": {
       "pt": "Breve descrição do problema e da solução desenvolvida.",
       "en": "Short description of the problem and the developed solution."
     },
     "links": {
       "demo": "https://link-da-demo.com",
       "repo": "https://github.com/rosangelacolli01-cloud/nome-do-repo"
     },
     "image": "assets/img/projects/nome-do-projeto.jpg"
   }
   ```
   *(Obs.: Caso o projeto não possua imagem, será exibido automaticamente um placeholder com as iniciais do projeto).*

3. Faça o commit e envie para a branch `main`:
   ```bash
   git add data/projects.json
   git commit -m "adiciona novo projeto ao portfólio"
   git push origin main
   ```
   O GitHub Pages atualizará o site automaticamente em poucos segundos.

---

## 📬 Contato

- **LinkedIn:** [linkedin.com/in/rosangelacolli](https://www.linkedin.com/in/rosangelacolli)
- **GitHub:** [github.com/rosangelacolli01-cloud](https://github.com/rosangelacolli01-cloud)
- **E-mail:** [collirosangela@hotmail.com](mailto:collirosangela@hotmail.com)

---

## 📄 Licença

Este projeto é de uso pessoal e aberto para fins de aprendizado e referência.
