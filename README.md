
# 📝 Ionic Angular To-Do App

A modern, responsive **To-Do List Application** built using **Ionic + Angular + Capacitor**.  
It’s lightweight, beautiful, and built to work **offline** with **persistent data** storage.

---

## 🌟 Features

- 🎨 Professional **dark theme** design  
- 💾 **Persistent storage** (saves tasks even after app closes)  
- 🧠 Smart **filtering** — All / Active / Completed  
- ⚡ Add, toggle, or delete tasks easily  
- 🚀 Works on **mobile, tablet, and desktop**  
- 🤖 Full **Android app support** using Capacitor  
- 🔰 Priority tags for each task  

---

## 🧰 Tech Stack

| Category      | Technology                  |
|----------------|-----------------------------|
| Framework      | Ionic Angular               |
| Language       | TypeScript                  |
| Storage        | Ionic Storage + Capacitor   |
| Styling        | SCSS (Dark Responsive Theme)|
| Native Runtime | Capacitor                   |
| IDE            | VS Code / Android Studio    |

---

## 🏗️ Installation & Setup

### 1️⃣ Clone this repository
```bash
git clone 'https://github.com/FaizaNaseem80/TodoList.git'
cd todoApp
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run in browser

```bash
ionic serve
```

Your app will be available at [http://localhost:8100](http://localhost:8100).

---

## ⚙️ Build for Android

### 1️⃣ Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

### 2️⃣ Build the web assets

```bash
ionic build
```

### 3️⃣ Add Android platform

```bash
npx cap add android
```

### 4️⃣ Sync and open in Android Studio

```bash
npx cap copy
npx cap sync
npx cap open android
```

### 5️⃣ Run the app

Click ▶️ **Run** in Android Studio (or use an emulator / connected device).

---

## 📁 Folder Structure

```
ionic-todo-app/
├── android/                  # Native Android project
├── src/
│   ├── app/
│   │   ├── home/             # Home page (main UI)
│   │   │   ├── home.page.html
│   │   │   ├── home.page.ts
│   │   │   ├── home.page.scss
│   │   ├── services/
│   │   │   └── todo.service.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   ├── theme/                # Global styling and variables
│   └── index.html
├── capacitor.config.ts       # Capacitor config
├── package.json
├── ionic.config.json
└── README.md
```

---

## 🖤 Dark Mode Design

* Elegant dark background
* Neon-style priority badges
* Smooth transitions and hover effects
* Adaptive grid for responsive behavior
* Rounded corners and clean card-based layout

---


## 🧩 Future Improvements

* 🔔 Local notifications for due tasks
* 🗂️ Categories or tags for tasks
* ☁️ Cloud sync using Firebase
* 🎙️ Voice command input

---

## 🧑‍💻 Author

**Faiza Naseem**
💼 ('https://github.com/FaizaNaseem80/')
📧 (faizanaseem873@gmail.com)


