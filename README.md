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

Docker e Docker Compose

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


O teste verifica:
✔ Se o PWA carrega e exibe o título "Bootcamp"

🔄 CI/CD — GitHub Actions

A cada push no branch main, acontece automaticamente:

Instala dependências da Web e API

Instala os browsers do Playwright

Inicia o servidor de desenvolvimento do Vite

Executa os testes E2E

Faz o build do PWA

Publica no GitHub Pages

Salva artefatos para avaliação

🌐 Deploy Online

O projeto está publicado em:

👉 https://alexandren18.github.io/monorepo-pwa

📦 Artefatos

O build final do PWA está em:

apps/web/dist

👨‍💻 Autor

Alexandre Nogueira Araujo Lopes
Estudante de Ciência da Computação — CEUB


