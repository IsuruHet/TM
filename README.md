## 📋 Task Management System

A full-stack web application that allows admin users to manage intern tasks with features like Google OAuth login, CRUD operations, PDF reporting, and responsive UI using Tailwind CSS.

---

### 🚀 Live Demo

https://github.com/user-attachments/assets/440e0007-0ce4-4f65-a7d1-5fd0ec025c10

---

### 🛠 Tech Stack

**Frontend**

- React + Vite
- Tailwind CSS
- Axios
- React Router

**Backend**

- Node.js + Express.js
- MongoDB + Mongoose
- Passport.js (Google OAuth 2.0)
- PDFKit (for report generation)
- CORS + Session + Cookies

---

### ✅ Features

- Google OAuth 2.0 login
- Auth middleware protection
- Dashboard with task summary
- Add / Edit / Delete tasks
- View tasks with search + sort
- Generate and download PDF reports
- Responsive UI with Tailwind CSS
- GitHub version control & commit history

---

### 📁 Folder Structure

```
project-root/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── config/
|   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
```

---

### ⚙️ Environment Variables

#### `.env` (Backend)

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGO_URI=mongodb+srv://...
PORT=5000
CLIENT_URL=http://localhost:5173
```

#### `.env` (Frontend)

```
VITE_API_BASE_URL=http://localhost:5000
```

---

### ▶️ Run Locally

#### 1. Backend

```bash
cd backend
npm install
npm run dev  # or node server.js
```

#### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### 📦 Deployment Suggestions

- **Frontend**: Vercel / Netlify
- **Backend**: Render / Railway / Cyclic
- **MongoDB**: MongoDB Atlas
- **Secrets**: Store environment variables securely

---

### 📄 License

MIT License. © 2025 Isuru Hettiarachchi

---
