# E-commerce-Assignment

Live Demo video Link - https://drive.google.com/file/d/1mgxBpPQEu-TyDDkadQID8eBzP0AWcnr_/view?usp=sharing
How to setup Environment video link(Local running project) - https://drive.google.com/file/d/1GZ6KhITm3TFIY72Z7Eg_HvfMJuKvZ7D5/view?usp=sharing
*Please see files

files - https://drive.google.com/file/d/1RcHA2LXjSGVQrjgZyMQK4uxjkmxl82RM/view?usp=sharing



This full-stack e-commerce application was built with React, Vite, Node.js, Express, and MongoDB. The project allows users to browse products, add them to the cart, 
and proceed with a checkout process. The backend handles user authentication, product management, and payment integration with Stripe.

Table of Contents


Tech Stack
Features
Installation
Frontend Configuration
Backend Configuration
Environment Variables
Running Locally

Tech Stack
Frontend: React, Vite, Tailwind CSS
Backend: Node.js, Express, MongoDB
Authentication: JWT (JSON Web Token)
Payment Integration: Stripe
Environment: .env for configuration



Packages-
Server- 
npm i express dotenv mongoose jsonwebtoken stripe cloudinary cookie-parser bcrypt.js ioredis nodemon

FrontEnd - 
 npm i axios @stripe/stripe-js framer-motion lucide-react react-confetti react-hot-toast react-router-dom recharts zustand

Features
User Authentication: Sign up, login, and session management.
Product Management: Display products, product categories, and product details.
Shopping Cart: Add products to the cart, update quantities, and remove items.
* Checkout: Integrated with Stripe for handling payments.
Responsive Design: Built with Tailwind CSS for mobile-first design.
* Coupon System: Users can apply, remove, and validate discount coupons during checkout.

Installation
1. Clone the Git repository:
   https://github.com/charindu24/FullStack_E-Commerce_Site24.git

2. Navigate into the project directory: cd FullStack_E-Commerce_Site24
3.  Install dependencies for both frontend and backend:

   * npm install
   * cd frontend
   * npm install
Set up environment variables (see below).
Frontend
* cd frontend
    npm run dev
  backend(server)
  * npm run dev

    4. Used my private Env file details already emailed
   
  * Need to create .env file  (path: cd FullStack_E-Commerce_Site24)
  * cd FullStack_E-Commerce_Site24
  * touch .env
  * copy emailed .env variables

       


5.Running Locally

1. Install all dependencies by running npm install in the root and frontend directories.
2. Set up your MongoDB connection, Stripe keys, and Coupon secret in the .env files.
3. Start both the frontend and backend servers:
   Frontend: npm run dev (cd frontend)

   License
   This project is licensed under the MIT License.
   MIT License

Copyright (c) 2024 Charindu Bandaranayake

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

