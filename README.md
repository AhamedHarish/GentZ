# 👔 GentZ - Men’s Clothing Full-Stack Application


GentZ is a **full-stack e-commerce web application** focused on **men’s clothing**, featuring products like **Shirts, Pants, Sneakers, Shades, Hoodies, and T-shirts**.  
The application demonstrates **role-based authentication, product management, cart & wishlist functionality**, and a responsive frontend interface.

> ⚠️ **Note:** This project is partially completed. Some links and functionalities may have bugs. Backend APIs should be verified using **Postman**.

---

## 🛠️ Features

- **Role-based Authentication**
  - User login/signup
  - Admin login
- **Guest Home Page**
- **Product Management**
  - Upload products with images (Admin)
  - View products, search, and sort
- **Cart & Wishlist**
  - Add products to cart or wishlist
- **Logout Functionality**
- **Responsive Frontend**
- **Backend APIs ready for testing via Postman**

---

## 🏗️ Technology Stack

| Layer         | Technology / Libraries / Dependencies |
|---------------|--------------------------------------|
| Frontend      | React (Vite), Bootstrap, React-icons, React-bootstrap, react-axios, React Router DOM |
| Backend       | Spring Boot (STS4), Spring Security, Spring Data JPA, Lombok, MySQL, H2 Database, Spring Boot DevTools, Spring Web |
| Database      | MySQL |
| Authentication| JWT (via Spring Security) |
| Version Control | Git & GitHub |

---

## 🗄️ Database Schema

### Users Table
| Column   | Type         | Description                    |
|----------|-------------|--------------------------------|
| id       | INT (PK)    | User ID                        |
| name     | VARCHAR     | User name                      |
| email    | VARCHAR     | User email                     |
| password | VARCHAR     | Hashed password                |
| role     | VARCHAR     | Role (`USER` / `ADMIN`)        |

### Products Table
| Column           | Type         | Description                          |
|------------------|-------------|--------------------------------------|
| id               | INT (PK)    | Product ID                           |
| brand            | VARCHAR     | Brand name                           |
| category         | VARCHAR     | Product category                     |
| description      | TEXT        | Product description                  |
| image_date       | DATE        | Not currently used                   |
| image_name       | VARCHAR     | Image file name                       |
| image_type       | VARCHAR     | Image MIME type                       |
| name             | VARCHAR     | Product name                          |
| price            | DECIMAL     | Product price                         |
| product_available| BOOLEAN     | Product availability                  |
| release_date     | DATE        | For DB use only                       |
| stock_quantity   | INT         | Quantity in stock                     |
| image_data       | BLOB        | Image data                             |
| image_data2      | BLOB        | Optional second image                  |
| image_type2      | VARCHAR     | Optional second image type             |

---

## ⚡ Installation & Setup

### Backend Setup

- cd Gentz-server

- mvn clean install

  spring.datasource.url=jdbc:mysql://localhost:3306/gentz
  spring.datasource.username=root
- spring.datasource.password=yourpassword
  spring.jpa.hibernate.ddl-auto=update

- mvn spring-boot:run
_________________________________________

### Frontend Setup

- cd gentz_userinterface
- npm install
- npm run dev


🔧 Notes

Check backend APIs first using Postman.

Some links and features are unfinished or buggy.

This is not a complete A–Z e-commerce app.



