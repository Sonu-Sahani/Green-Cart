# 🛒 FreshBasket - Full Stack Grocery Delivery Platform

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow)

GreenCart is a modern full-stack grocery delivery web application built using the **MERN Stack**. It provides a seamless shopping experience for customers while offering an intuitive seller dashboard for managing products, orders, and inventory.

---

# 🚀 Features

### 👤 User Features

* Secure JWT Authentication
* Browse grocery products
* Search & filter products
* Product categories
* Shopping cart
* Add multiple delivery addresses
* Place orders
* Order history
* Responsive UI
* Profile management

---

### 🛍 Seller/Admin Features

* Secure Seller Login
* Dashboard Analytics
* Add Products
* Edit/Delete Products
* Image Upload using Cloudinary
* Manage Orders
* Update Order Status
* Product Inventory Management

---

# 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Cloudinary
* Bcrypt

---

# 📂 Project Structure

```
GreenCart
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/GreenCart.git
```

---

## 2. Navigate into project

```bash
cd GreenCart
```

---

## 3. Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 4. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret

SELLER_EMAIL=your_email

SELLER_PASSWORD=your_password

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

---

# ▶️ Run the Project

### Backend

```bash
cd server
npm run server
```

### Frontend

```bash
cd client
npm run dev
```

---

# 📸 Screenshots

Add screenshots inside a folder named **screenshots**

```
screenshots/

home.png

products.png

cart.png

seller-dashboard.png

orders.png
```

Then display them like this:

```md
## Home

![Home](screenshots/home.png)

## Dashboard

![Dashboard](screenshots/seller-dashboard.png)
```

---

# 🔐 Authentication

* JWT Based Authentication
* Password Hashing with Bcrypt
* Protected Routes
* Seller Authorization

---

# 📦 API Modules

* Authentication
* Products
* Cart
* Orders
* Address
* Seller
* Upload

---

# 🌟 Future Improvements

* Razorpay Integration
* Stripe Integration
* Email Notifications
* Wishlist
* Coupon System
* Product Reviews
* Real-time Order Tracking
* Dark Mode

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Developer

**Sonu Sahani**

B.Tech CSE

Full Stack MERN Developer

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

⭐ If you found this project helpful, don't forget to star the repository!
