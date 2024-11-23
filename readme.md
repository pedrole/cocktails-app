# Cocktail Sharing App
A full-stack web application built with **Node.js** , **React** , **MongoDB** , and **Express**  for exploring, creating, and reviewing cocktail recipes.
## Table of Contents

1. [Project Overview](https://chatgpt.com/c/673f5660-d734-8009-bf58-fd373f793fc2#project-overview)

2. [Technologies Used](https://chatgpt.com/c/673f5660-d734-8009-bf58-fd373f793fc2#technologies-used)

3. [Setup Instructions](https://chatgpt.com/c/673f5660-d734-8009-bf58-fd373f793fc2#setup-instructions)

4. [Running the Development Environment](https://chatgpt.com/c/673f5660-d734-8009-bf58-fd373f793fc2#running-the-development-environment)

5. [Environment Variables](https://chatgpt.com/c/673f5660-d734-8009-bf58-fd373f793fc2#environment-variables)

6. [Project Structure](https://chatgpt.com/c/673f5660-d734-8009-bf58-fd373f793fc2#project-structure)

7. [Contributing](https://chatgpt.com/c/673f5660-d734-8009-bf58-fd373f793fc2#contributing)

## Project Overview

This web app allows users to explore, create, rate, and review cocktails. It includes user authentication, CRUD operations for cocktails, categories, and reviews, and is fully responsive.
**Features** :
- User authentication (sign up, login, manage accounts)

- Cocktail management (view, create, edit, delete cocktails)

- Review and rating system for cocktails

- Categorization (e.g., Virgin, Non-Virgin)

- Search, filter, and sort cocktails

- API backend with Node.js and MongoDB

## Technologies Used

- **Backend** : Node.js, Express, MongoDB

- **Frontend** : React, HTML, CSS (Tailwind)

- **Authentication** : JWT (JSON Web Tokens)

- **Database** : MongoDB (Mongoose for ODM)

- **Deployment** : Docker (optional for containerization)

## Setup Instructions

### Prerequisites

Before starting, ensure that you have the following installed:

- [Node.js](https://nodejs.org/)  (LTS version recommended)

- [MongoDB](https://www.mongodb.com/try/download/community)  or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  account for cloud database

- [Git](https://git-scm.com/)

- [npm](https://www.npmjs.com/)  (comes with Node.js)

### 1. Clone the Repository


```bash
git clone https://github.com/yourusername/cocktail-sharing-app.git
cd cocktail-sharing-app
```

### 2. Install Dependencies for Backend and Frontend

#### Backend (Node.js and MongoDB)

Navigate to the backend folder and install the dependencies:


```bash
cd backend
npm install
```

#### Frontend (React)

Navigate to the frontend folder and install the dependencies:


```bash
cd ../frontend
npm install
```

### 3. Set up MongoDB

#### Option 1: Running MongoDB Locally

If you want to run MongoDB locally, make sure you have it installed and running:


```bash
# For Linux (WSL) or macOS, run:
sudo service mongod start

# For Windows, you can use MongoDB Compass or run MongoDB as a service.
```

#### Option 2: Using MongoDB Atlas (Cloud Database)
If you're using MongoDB Atlas, create a cluster and get the connection string. Replace the connection string in the `.env` file (explained below).4. Create a `.env` File for the BackendCopy the `.env.example` file in the `backend` folder and rename it to `.env`. Then, add your environment-specific details, such as MongoDB URI and JWT secret key:

```bash
# .env
MONGODB_URI=mongodb://localhost:27017/cocktail_db  # Or your MongoDB Atlas URI
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 5. Running the Development Environment

#### Backend Server (API)
Navigate to the `backend` directory and start the Node.js server:

```bash
cd backend
npm run dev
```
This will start the server on `http://localhost:5000`.
#### Frontend Development Server
Navigate to the `frontend` directory and start the React development server:

```bash
cd ../frontend
npm start
```
This will start the React app on `http://localhost:3000`.
## Environment Variables

- **MONGODB_URI** : Connection string to your MongoDB database (either local or MongoDB Atlas).

- **JWT_SECRET** : A secret key used for signing JWT tokens for authentication.

- **PORT** : The port the backend server will run on (default is `5000`).

## Project Structure

The project is organized as follows:


```graphql
cocktail-sharing-app/
├── backend/
│   ├── controllers/        # Controllers for API logic
│   ├── models/             # Mongoose models for DB schema
│   ├── routes/             # API routes
│   ├── .env.example        # Example environment variables
│   └── server.js           # Entry point for the backend
└── frontend/
    ├── public/             # Static files (HTML, images, etc.)
    ├── src/                # Source code for React app
    ├── .env.example        # Example environment variables
    ├── package.json        # React app dependencies and scripts
    └── App.js              # Main React app component
```

## Contributing

1. Fork the repository

2. Create a new branch (`git checkout -b feature/your-feature-name`)

3. Make changes and commit them (`git commit -am 'Add new feature'`)

4. Push to the branch (`git push origin feature/your-feature-name`)

5. Open a Pull Request


---


Let me know if you need further details or customizations for the setup!
