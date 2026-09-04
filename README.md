# JWT Authentication System

A full-stack JWT Authentication System built using React, Node.js, Express.js, MongoDB Atlas, and JSON Web Tokens (JWT).

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- MongoDB Atlas Integration
- Secure Password Hashing
- Logout Functionality

## Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- Vite

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

## Project Structure

```text
jwt-authentication-system
│
├── client
│   ├── src
│   ├── package.json
│   └── index.html
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/jwt-authentication-system.git
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
PORT=5000
```

Start Backend:

```bash
node server.js
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## API Endpoints

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

## Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

## Author

Sarvagya Shukla

B.Tech AIML

Full Stack Developer
