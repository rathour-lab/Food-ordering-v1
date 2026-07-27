# 🍽️ Hunger Town - Food Ordering & Table Reservation System

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen?logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/CSS-Tailwind-blue?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-orange)

A full-stack **MERN Stack (MongoDB, Express.js, React.js, Node.js)** web application that allows users to order food online, reserve tables, and track their orders in real time. It also includes a powerful admin dashboard for managing menu items, customer orders, and reservations.

---

## 🚀 Features

### 👤 User Features

- 🍔 Browse food items by category
- 🔍 Search menu items
- 🛒 Add/Remove items from cart
- ➕ Increase & Decrease quantity
- 💳 Place food orders
- 📍 Checkout with delivery details
- 📅 Table Reservation System
- 📦 Track order status
- 🔐 User Authentication (JWT)
- 🍪 Persistent Login using Cookies
- 📱 Fully Responsive UI

---

### 🔐 Admin Features

- Secure Admin Login
- 📋 Manage Food Menu
- ➕ Add New Menu Items
- ✏️ Edit Existing Menu Items
- ❌ Delete Menu Items
- 🍽️ Enable/Disable Food Availability
- 📦 View Customer Orders
- 🔄 Update Order Status
- 📅 Manage Reservation Requests
- ✅ Confirm / ❌ Cancel Reservations
- 📊 Dashboard with Statistics
- 🔔 Real-time Notifications using WebSocket
- 📧 Automatic Email Notifications for Reservation Updates

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- SweetAlert2
- React Icons
- Framer Motion

### Backend

- Node.js
- Express.js
- JWT Authentication
- Cookie Parser
- WebSocket
- Nodemailer

### Database

- MongoDB
- Mongoose

---

## 📂 Project Structure

```
Food-ordering-v1/
│
├── client/          # React Frontend
│
├── backend/         # Express Backend
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
https://github.com/rathour-lab/Food-ordering-v1.git
```

## 2. Move into Project Folder

```bash
cd Food-ordering-v1
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

Example:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

EMAIL=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

Run backend

```bash
npm start
```

---

# Frontend Setup

Open another terminal.

```bash
cd client
npm install
npm run dev
```

---

# 🌐 Default URLs

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:3000
```

---

# 📁 Environment Variables

Create a `.env` file inside **backend**

```env
PORT=
MONGODB_URI=
JWT_SECRET=
EMAIL=
EMAIL_PASSWORD=
```

---

# 🚀 Future Improvements

- 💳 Online Payment Gateway
- ❤️ Wishlist
- ⭐ Ratings & Reviews
- 🔍 Advanced Search & Filters
- 📈 Sales Analytics
- 📱 Progressive Web App (PWA)
- 🌍 Multi-language Support
- 🎟️ Coupons & Discount System

---
## 👥 Collaboration

This project was developed collaboratively by two developers as a MERN stack learning project.

**Contributors:**
- Sahil (Frontend & Backend development)
-  Rathour-lab (Jaskaran Singh) (Frontend & Backend development)
  
    The repository preserves the complete Git history to reflect the collaborative development process.

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is developed for learning and portfolio purposes.

---

# 👨‍💻 Author

**Jaskaran**

GitHub:

Github: https://github.com/rathour-lab

---

⭐ If you like this project, don't forget to give it a Star!
