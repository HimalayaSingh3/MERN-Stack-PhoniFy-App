# 📱 Phone Management App

## 🌟 Overview
The **Phone Management App** is a full-stack web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). This app allows users to efficiently manage and organize phone contacts with an intuitive and user-friendly interface.

## 🚀 Features
- 🔐 **User Authentication** (Register/Login) with JWT
- 📂 **Add, and Delete Contacts**
- 🗃 **MongoDB as the database**
- 🚀 **Fast and Responsive UI** with Tailwind CSS

## 🛠️ Tech Stack
### Frontend:
- ⚛️ **React.js** (Vite for faster development)
- 🎨 **Tailwind CSS** (Beautiful and modern UI)

### Backend:
- 🖥 **Node.js** + **Express.js** (REST API)
- 🗄 **MongoDB** + **Mongoose** (Database)
- 🔑 **JWT Authentication** (Secure login system)


## 🏗 Installation & Setup
Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/HimalayaSingh3/MERN-Stack-PhoniFy-App.git
cd phone-management-app
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd server
npm install
```
#### Frontend
```sh
cd client
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the server directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

### 4️⃣ Run the Application
#### Start Backend
```sh
cd server
npm run dev
```
#### Start Frontend
```sh
cd client
npm run dev
```

## 🎯 API Endpoints
| Method | Endpoint                     | Description          |
|--------|------------------------------|----------------------|
| POST   | /api/v1/users/register       | Register new user    |
| POST   | /api/v1/users/login          | User login           |
| GET    | /api/v1/phones/get-no        | Fetch all contacts   |
| POST   | /api/v1/phones/add-no        | Add a new contact    |
| DELETE | /api/v1/phones/delete-no/:id | Delete contact       |

## 📜 License
This project is **open-source** and available under the [MIT License](LICENSE).

## 🤝 Contributing
Contributions are welcome! Feel free to **fork**, submit issues, or make a **pull request**.

## 📧 Contact
For any inquiries, reach out at: **himalayasingh337@gmail.com**

---
✨ _Star this repo if you find it useful!_ ⭐

