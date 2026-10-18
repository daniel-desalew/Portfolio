# Daniel Portfolio — Full-Stack MERN

A modern, full-stack developer portfolio built with **React + Vite** (frontend) and **Express + MongoDB** (backend).

## ✨ Features
- Animated hero section with typewriter effect
- About me with stats & resume download
- Featured projects with live/GitHub links
- Skills grouped by category with animated progress bars
- Contact form with server-side email handling
- Admin dashboard with JWT authentication
- Dark / Light theme toggle
- Fully responsive design

## 🛠 Tech Stack
| Layer    | Tech                                |
|----------|-------------------------------------|
| Frontend | React 18, Vite, Framer Motion, CSS  |
| Backend  | Node.js, Express, MongoDB, Mongoose |
| Auth     | JWT, bcrypt                         |
| Email    | Nodemailer                          |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB running locally or a MongoDB Atlas URI

### 1. Clone
```bash
git clone https://github.com/YOUR_USERNAME/daniel-portfolio.git
cd daniel-portfolio
```

### 2. Install dependencies
```bash
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..
```

### 3. Configure environment
```bash
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI, JWT secret, and email credentials
```

### 4. Seed the database
```bash
npm run seed
```

### 5. Run in development
```bash
npm run dev
# Client: http://localhost:5173
# Server: http://localhost:5000
```

## 📦 Deployment

### Frontend (Vercel)
1. Import your GitHub repo in [vercel.com](https://vercel.com)
2. Set **Root Directory** to `client`
3. Set **Build Command** to `npm run build`
4. Set **Output Directory** to `dist`
5. Add environment variable: `VITE_API_URL` = your deployed server URL

### Backend (Render / Railway)
1. Create a new Web Service
2. Set **Root Directory** to `server`
3. Set **Build Command** to `npm install`
4. Set **Start Command** to `node server.js`
5. Add all environment variables from `server/.env`

## 📄 License
MIT
