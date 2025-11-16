📱 PWA + API + Testes + Docker + CI/CD — Monorepo

Este projeto é um PWA completo, integrado com uma API Node.js, organizado em monorepo, containerizado com Docker, testado com Playwright e com CI/CD automatizado pelo GitHub Actions, incluindo deploy no GitHub Pages.

Projeto desenvolvido para avaliação do módulo de Progressive Web Apps.

📁 Estrutura do Projeto

monorepo-pwa/
├── apps/
│   ├── web/   → PWA feito com Vite
│   └── api/   → API Node.js com Express
├── docker-compose.yml
└── .github/workflows/ci.yml


🚀 Tecnologias Utilizadas

Vite (frontend)

PWA com service worker + manifest

Node.js + Express (API)

Docker & Docker Compose

Playwright (testes E2E)

GitHub Actions (CI/CD completo)

GitHub Pages (deploy automático)

🐳 Como Rodar com Docker

docker compose up --build


Serviços rodando:

🌐 Web: http://localhost:8080

🔌 API: http://localhost:3000

🧪 Testes E2E (Playwright)

Para rodar manualmente:

cd apps/web
npx playwright test


🔄 CI/CD — GitHub Actions

A cada push no branch main, automaticamente:

1️⃣ Instala dependências da Web e API
2️⃣ Instala browsers do Playwright
3️⃣ Sobe o servidor de desenvolvimento
4️⃣ Executa os testes E2E
5️⃣ Gera o build do PWA
6️⃣ Publica no GitHub Pages
7️⃣ Salva artefatos para avaliação

🔗 Links Importantes (Requisitos do Trabalho)
📦 Repositório Monorepo

👉 https://github.com/alexandren18/monorepo-pwa

🌐 PWA Publicado (GitHub Pages)

👉 https://alexandren18.github.io/monorepo-pwa

🔄 Última Execução do CI

👉 https://github.com/alexandren18/monorepo-pwa/actions/runs/19401371640

📁 Artefatos do CI (gerados automaticamente)

Build final do PWA (github-pages.zip)

Relatório de testes E2E (playwright-report/)

Dist final: apps/web/dist

👨‍💻 Autor

Alexandre Nogueira Araujo Lopes
Estudante de Ciência da Computação — CEUB
