import express from "express";
import { addToCart } from "../controllers/cart.controller";
import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", protectRoute, getCartProduct);
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantity);;



export default router; 

