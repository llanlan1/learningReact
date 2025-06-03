# learningReact
Small project(s) to kickstart my learning in React

---

### 📋 README.md

````markdown
# Simple To-Do App 📝

A minimalist and responsive to-do list app built using **React**, **TypeScript**, and **CSS Modules**. Tasks are saved in the browser's **localStorage** so your list persists even after refreshing the page.

---

## ✨ Features

- ✅ Add tasks using the **input field** or **Enter key**
- ✅ Rejects tasks that are empty or contain only numbers/special characters
- ✅ Shows an inline error message if the input is invalid
- ✅ Delete tasks individually
- ✅ Tasks persist using `localStorage`
- ✅ Clean, responsive UI with custom styling using CSS Modules

---

## 🚀 Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules
- `localStorage` for data persistence

---

## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🧠 Project Structure

```
src/
├── App.tsx             # Main React component
├── App.module.css      # Component-level styles using CSS Modules
└── index.tsx           # App entry point
```

---

## 📌 Notes

* The app uses a regex check to ensure that each task contains at least one letter. It won't accept inputs that are only numbers or special characters.
* All tasks are stored in your browser's localStorage and will remain until manually cleared or deleted.

---

## 📸 Screenshot

![screenshot](./assets/1.png)
![screenshot](./assets/2.png)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Built with love using React & TypeScript 💙

```

---

