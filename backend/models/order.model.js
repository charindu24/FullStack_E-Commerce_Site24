import mongoose, { mongo } from "mongoose";
import User from "./user.model";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
            products: [
                {
                    product: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Product",
                        required: true,
                    },
                    quantity: {
                        type: Number,
                        required: true,
                        min: 1,
                    },
                    price: {
                        type: Number,
                        required: true,
                        min: 0,
                    },
                },
            ],
            totalAmount: {
                type: Number,
                required: true,
                min: 0,
            },
            stripeSessionId: {
                type: String,
                unique: true,
            },
        },
        { timeStamps: true } 
);

const Order = mongoose.Model("Order", orderSchema);

export default Order; 

