import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import productRoutes from './routes/product.route.js';
import { connectDB } from "./lib/db.js";
import cookieParser from 'cookie-parser';
import cartRoutes from './routes/cart.route.js';
import couponRoutes from './routes/coupon.route.js';
import paymentRoute from './routes/payment.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json());   // allows to parse the body of the request
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/prodcuts", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoute);

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);

    connectDB();
});

