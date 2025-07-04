# 🌗 React Theme Toggle App

A minimal yet powerful **React Theme Toggle** application that allows users to switch between **light** and **dark** themes. Built using **React Hooks** and styled with **Tailwind CSS** (or CSS Modules), this project demonstrates how to implement a responsive and interactive theme switcher in a modern React app.

---

## 🚀 Features

- 🌞 Light / 🌚 Dark theme toggle
- ⚡ Instant theme change without reloading
- 💾 Theme preference persisted in local storage
- 🎯 Fully responsive and mobile-friendly
- ⚛️ Built with functional components and hooks (`useState`, `useEffect`)
- ✨ Clean and elegant UI

---

## 🛠️ Tech Stack

- **React.js** (with Hooks)
- **JavaScript (ES6+)**
- **Tailwind CSS** or **Custom CSS Modules**
- **LocalStorage API**

---

## ⚙️ How It Works

1. A `useState` hook manages the current theme (`light` or `dark`)
2. The `useEffect` hook checks local storage for a saved preference
3. On toggle, the theme class is added to the `<html>` or `<body>` element
4. The updated theme is saved to local storage

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Prat260104/react-theme-toggle.git
cd react-theme-toggle
```

#### 2.Install Dependencies

```bash
npm i
```

### 3.Start the dev server

```bash
npm run dev
```


