import Express from "express";
import { login, register, verifyToken } from "../controllers/auth.js";
const router = Express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verifyToken', verifyToken);
export default router;