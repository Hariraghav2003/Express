# Express Modular App (All Modules on Single Port)

This project demonstrates different Express.js concepts organized into modular routes, all running on a single port (`3000`).

## 📁 Project Structure

```
.
├── app.js
├── routes
│   ├── day1.js
│   ├── day2.js
│   ├── day3.js
│   ├── day4.js
│   ├── day5.js
│   ├── day6.js
│   └── day7.js
├── Multipleroutes
│   └── Datahandlling.js
├── Expresshtml
│   └── Getdata.js
```

## 📦 Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

## 🚀 Run the server

```bash
node app.js
```

Server will start on: `http://localhost:3000`

---

## 📚 Modules Overview

### 🔹 Day 1 - Middleware Basics

**Path:** `/day1`  
Demonstrates logging and custom middleware usage.

---

### 🔹 Day 2 - JSON and HTML Response

**Paths:**

- `/day2/html` → Sends HTML
- `/day2/json` → Sends JSON

---

### 🔹 Day 3 - URL Path Handling

**Paths:**

- `/day3/second` → Second Page
- `/day3/` → First Page

---

### 🔹 Day 4 - Form Handling

**Paths:**

- `/day4/senddata` → Form to enter data
- `/day4/getdata` (POST) → Processes submitted form data

---

### 🔹 Day 5 - Multiple Routes + 404 Page

**Path:** `/day5/...`  
Handles multiple routes imported from `Multipleroutes/Datahandlling.js`, and shows a custom 404 page for unmatched routes.

---

### 🔹 Day 6 - Serving HTML Files

**Path:** `/day6/...`  
Imports static HTML routes from `Expresshtml/Getdata.js`.

---

### 🔹 Day 7 - Client-Server Data Exchange

**Paths:**

- `POST /day7/todo` → Send a todo item (`title`, `description`)
- `GET /day7/todo` → Retrieve all todo items

---

## 🛠 Dependencies

- express
- cors
- body-parser

Install with:

```bash
npm install express cors body-parser
```

---

## 📩 License

Created by Hariraghav.S

---

## 📬 Contact

[![Email](https://img.shields.io/badge/email-hariraghava21s@gmail.com-blue?style=flat&logo=gmail)](mailto:hariraghava21s@gmail.com)

---

## 🌐 Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hariraghav.S-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/hariraghav962003/)