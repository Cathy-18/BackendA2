# Backend A2 – REST API using Node.js & MongoDB Atlas

## 📌 Project Description
This project is a RESTful backend application developed using **Node.js**, **Express.js**, and **MongoDB Atlas**.  
It implements basic **CRUD operations** (Create, Read, Update, Delete) and is tested using **Postman**.

The application allows users to create, view, update, and delete posts stored in a cloud database.

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- VS Code

---

## 📂 Project Structure
backend-a2/
│
├── models/
│ └── Post.js
├── routes/
│ └── posts.js
├── server.js
├── package.json
├── package-lock.json
├── .env.example
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/backend-a2.git
cd backend-a2
```
npm install

MONGO_URI=your_mongodb_atlas_connectionpm run dev
n_string
PORT=3000
http://localhost:3000


🔗 API Endpoints
Method	Endpoint	    Description
POST	  /addPosts	    Create a new post
GET	    /getPosts	    Retrieve all posts
PATCH	  /post/:id	    Update a post
DELETE	/delPosts/:id	Delete a post

🧪 Testing

All API endpoints were tested using Postman.
MongoDB Atlas was used to verify data persistence in the cloud database.

✅ Features

RESTful API design
Cloud database connection (MongoDB Atlas)
CRUD operations
Error handling
Tested using Postman

📸 Screenshots

Screenshots of API testing and MongoDB Atlas data are included in the assignment submission.

📝 Author

Catherine Nixon
B.Tech Computer Science & Engineering
ASIET, Kalady
