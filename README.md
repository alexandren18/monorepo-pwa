# 📱 PWA + API + Testes + Docker + CI/CD — Monorepo

Este projeto é um **PWA completo**, integrado com uma **API Node.js**, organizado em **monorepo**, containerizado com **Docker**, testado com **Playwright** e com **CI/CD automatizado pelo GitHub Actions**, incluindo **deploy no GitHub Pages**.

Projeto desenvolvido para avaliação do módulo de **Progressive Web Apps**.

---

## 📁 Estrutura do Projeto

monorepo-pwa/
├── apps/
│ ├── web/ → PWA feito com Vite
│ └── api/ → API Node.js com Express
├── docker-compose.yml
└── .github/workflows/ci.yml


---

## 🚀 Tecnologias Utilizadas

- **Vite (frontend)**
- **PWA** com service worker + manifest
- **Node.js + Express (API)**
- **Docker e Docker Compose**
- **Playwright (testes E2E)**
- **GitHub Actions (CI/CD completo)**
- **GitHub Pages (deploy automático)**

---

## 🐳 Como Rodar com Docker

```sh
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

A cada push no branch main:

1️⃣ Instala dependências da Web e API
2️⃣ Instala browsers do Playwright
3️⃣ Sobe o servidor de desenvolvimento
4️⃣ Executa testes E2E
5️⃣ Gera o build do PWA
6️⃣ Publica automaticamente no GitHub Pages
7️⃣ Salva artefatos para avaliação

🌐 Deploy Online

A versão publicada está disponível em:

👉 https://alexandren18.github.io/monorepo-pwa

📦 Artefatos

O build final do PWA está em:

apps/web/dist

👨‍💻 Autor

Alexandre Nogueira Araujo Lopes
Estudante de Ciência da Computação — CEUB


---

✔ **Agora sim vai aparecer bonitinho igual no Preview do GitHub.**  
Se quiser, posso adicionar badges, prints, ou deixar mais moderno.
