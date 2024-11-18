import express from "express";
import { 
    createProduct, 
    deleteProduct,
    getAllProducts,
    getFeaturedProducts,
    getRecommendedProducts,
    getProductsByCategory,
    toggleFeaturedProducts


 } from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

// Base route for /api/Products


router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProducts);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;


