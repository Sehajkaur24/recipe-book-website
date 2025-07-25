# 🍽️ Recipe Book Website

Welcome to the **Recipe Book Website** — a full-stack monorepo application where users can create, view, edit, delete and manage their favorite recipes! with a beautiful, modern UI and robust backend. and manage their favorite recipes!

> “Cooking is an art, and your kitchen is your canvas.”

---

## Features

- 🍕 **Recipe of the Day**: Get daily recipe inspiration right on the dashboard.
- 🔍 **Search Recipes**: Find recipes that you added by name using the search bar.
- 🧾 **Add New Recipes**: Easily create and submit your own recipes.
- ⏱️ **Cooking Timer**: Built-in timer to help track your cooking time.
- 👨‍🍳 **Authentication**: Sign Up and Sign In functionality for personalized experience.
- ⚙️ **Settings Panel**: Adjust app preferences (Coming soon).

---

## Tech Stack

### 🎨 Frontend
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

### ⚙️ Backend
- [NestJS](https://nestjs.com/)
- RESTful API with modular structure (`auth`, `recipe`, `core`)
- DTOs for validation
- JWT-based Auth (assumed from `auth/` module)

### 🔧 Tooling
- [PNPM](https://pnpm.io/) Workspaces
- ESLint + Prettier
- Jest (for testing NestJS backend)

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sehajkaur24/recipe-book-website.git
cd recipe-book-website
```

### 2.Install Dependencies
Ensure you have PNPM installed globally:

```bash
pnpm install
```
### 3. Run Backend (NestJS)
```bash
cd apps/backend
pnpm start:dev
By default, backend should run on: http://localhost:8000
```

### 4. Run Frontend (Next.js)
In a new terminal:

```bash
cd apps/frontend
pnpm dev
Frontend runs on: http://localhost:3000
```


