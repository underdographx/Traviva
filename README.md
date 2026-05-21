# TRAVIVA

Luxury travel platform built with React, Vite, Node.js, Express, MongoDB, JWT auth and Razorpay payments.

## Install

```bash
npm install
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd install
```

## Environment Setup

Create `.env` in the project root:

```env
VITE_API_URL=http://localhost:5000/api
```

Create `backend/.env`:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/traviva?retryWrites=true&w=majority
JWT_SECRET=replace_this_with_a_long_random_secret
JWT_EXPIRES_IN=7d
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## Run

Start the backend:

```bash
npm start
```

Start the frontend in another terminal:

```bash
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000`

## Structure

- `src/components` - shared UI such as the dynamic navbar
- `src/context` - auth state and localStorage session handling
- `src/data` - complete TRAVIVA category and trip catalog
- `src/pages` - home, auth, experience and trip detail pages
- `src/utils` - API helper with JWT headers
- `backend/config` - MongoDB connection
- `backend/controllers` - auth and payment logic
- `backend/middleware` - JWT protected route middleware
- `backend/models` - Mongoose user model
- `backend/routes` - API route definitions
