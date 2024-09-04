# Bookstore API

## Overview

The **Bookstore API** is a RESTful API built with Node.js, Express, and MongoDB. It provides endpoints for managing books and users, including functionalities for creating, reading, updating, and deleting books, as well as user registration and login.

## Features

- **Book Management:**
  - **Create** a new book
  - **Fetch** all books with pagination and search
  - **Fetch** a single book by ID
  - **Update** a book
  - **Delete** a book

- **User Management:**
  - **Register** a new user
  - **Login** a user and receive a JWT token

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- MongoDB server running locally or a MongoDB Atlas account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bookstore-api.git
   cd bookstore-api
   npm install
   PORT=5000
  ```bash
MONGO_URI=mongodb://localhost:27017/bookstore

JWT_SECRET=your_jwt_secret_key
npm start




