
import express from 'express';
import { protectRoute } from '../middleware/auth.middleware';

const router = express.Router();

router.get("/", protectRoute, getCoupon);
router.get("/validate/", protectRoute, validate );

export default router;