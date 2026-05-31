# 🍽️ Restaurant Reservation App

A full-stack MERN web app that lets customers browse the menu, explore the restaurant, and book a table online — with reservations managed through a Node.js/Express backend and stored in MongoDB.

---

## 📁 Project Structure

```
Resturant_Reservation/
├── Backend/        # Node.js + Express REST API
└── Frontend/       # React + Vite client
```

---

## ✨ Features

- Browse restaurant menu (Breakfast, Lunch, Dinner)
- Learn about the restaurant — About, Team, and Who We Are sections
- Make a table reservation via an online form
- Real-time toast notifications for success and error feedback
- Redirects to a success page after a confirmed booking
- Custom 404 Not Found page
- Input validation on both client and server side

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| React 19 | UI library |
| Vite | Build tool & dev server |
| React Router DOM | Client-side routing |
| Axios | HTTP requests |
| React Hot Toast | Toast notifications |
| React Icons | Icon library |
| React Scroll | Smooth scroll navigation |

### Backend
| Tech | Purpose |
|------|---------|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose | Database & ODM |
| dotenv | Environment variable management |
| CORS | Cross-origin request handling |
| Validator | Email & input validation |
| Nodemon | Dev auto-restart |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

---

### Backend Setup

```bash
cd Backend
npm install
```

Create the environment file:

```bash
# Copy the example file
cp config/config.env.example config/config.env
```

Fill in your values in `config/config.env`:

```env
PORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/?appName=Cluster0
```

Start the development server:

```bash
npm run dev
```

The API will be running at `http://localhost:4000`.

---

### Frontend Setup

```bash
cd Frontend
npm install
```

Create the environment file:

```bash
# Copy the example file
cp .env.example .env
```

Fill in your values in `.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the development server:

```bash
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 📡 API Reference

### Base URL
```
http://localhost:4000/api/v1
```

### Endpoints

#### `POST /reservation/send`

Submit a table reservation.

**Request Body**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "date": "2026-06-15",
  "time": "19:00"
}
```

**Success Response** `200 OK`

```json
{
  "success": true,
  "message": "Reservation Sent Successfully"
}
```

**Error Response** `400 Bad Request`

```json
{
  "success": false,
  "message": "Please Fill All Details!"
}
```

---

## 📋 Reservation Model

| Field | Type | Validation |
|-------|------|-----------|
| firstName | String | Required, 3–30 characters |
| lastName | String | Required, 3–30 characters |
| email | String | Required, valid email format |
| phone | String | Required, exactly 10 digits |
| date | String | Required |
| time | String | Required |

---

## 📄 Pages & Components

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Landing page with all sections |
| `/success` | `Success` | Shown after a successful reservation |
| `*` | `NotFound` | 404 page |

**Home page sections:** Navbar · Hero · About · Menu · Qualities · Reservation · Who Are We · Team · Footer

---

## 🔒 Environment Variables

### Backend — `config/config.env`

| Variable | Description |
|----------|-------------|
| `PORT` | Port the server runs on (default: 4000) |
| `FRONTEND_URL` | Allowed CORS origin |
| `MONGO_URI` | MongoDB connection string |

### Frontend — `.env`

| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URL` | Backend API base URL |

> ⚠️ Never commit `.env` or `config/config.env` to version control. Both are listed in `.gitignore`.

---

## 📦 Scripts

### Backend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start with nodemon (development) |
| `npm start` | Start with node (production) |

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
# Restaurant-Reservation
