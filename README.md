# Lets_Draw 🎨

A collaborative, real-time multiplayer diagramming tool inspired by [Excalidraw](https://excalidraw.com), built with modern web technologies including **Next.js**, **Turborepo**, **TypeScript**, **Express**, **WebSockets**, and **Node.js**.

GitHub Repo: [https://github.com/ParasharDeb/Lets_Draw](https://github.com/ParasharDeb/Lets_Draw)

---

## 🚀 Overview

**Lets_Draw** enables multiple users to draw, create, and manipulate intuitive, hand‑drawn style diagrams together in **real time**. The app features a canvas‑based editor that syncs user actions via WebSockets, enabling seamless multi‑user collaboration. It is structured as a **Turborepo monorepo**, with Next.js powering the frontend and Express handling backend APIs & WebSocket communication.

---

## ✨ Features

- **Real-time collaboration** — Multiple users can draw, edit, and update on the same canvas simultaneously.
- **Hand-drawn style shapes** — Ideal for architecture designs, mind maps, and whiteboarding sessions.
- **Cloud syncing** — Optionally save diagrams or work locally.
- **Robust stack** — Next.js frontend, Node.js backend with Express & WebSockets for instant updates.
- **TypeScript** — Static typing across the codebase for safety and scalability.
- **Monorepo structure** — Powered by Turborepo for modular development.

---

## 🛠 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Backend:** [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), WebSockets
- **Architecture:** [Turborepo](https://turbo.build/repo)
- **Version Control:** Git & GitHub

---

## 📦 Project Structure

Lets_Draw/
├── apps/
│ ├── web/ # Next.js frontend
│ └── api/ # Express + WebSocket backend
├── packages/ # Shared packages/components
├── turbo.json # Turborepo config
└── package.json

text

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/ParasharDeb/Lets_Draw.git
cd Lets_Draw

text

### 2️⃣ Install Dependencies
npm install

or
yarn install

or
pnpm install

text

### 3️⃣ Run in Development Mode
npx turbo dev

text
This will start:
- **Frontend** (Next.js) with hot reload  
- **Backend** (Express WebSocket server) with auto‑reload

### 4️⃣ Build for Production
npx turbo build

text

### 5️⃣ Run Production Server
npx turbo start

text

---

## 👨‍💻 Contributing

1. **Fork** the repository
2. **Create** a new feature branch (`git checkout -b feature-name`)
3. **Commit** changes (`git commit -m 'Add awesome feature'`)
4. **Push** to GitHub (`git push origin feature-name`)
5. **Create** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🌐 Links

🔗 **GitHub Repo:** [https://github.com/ParasharDeb/Lets_Draw](https://github.com/ParasharDeb/Lets_Draw)  
🎯 **Author:** [Parashar Deb](https://github.com/ParasharDeb)