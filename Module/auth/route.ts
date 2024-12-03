
import { Router } from "express";
import { authController } from "./controller";
import { verifyToken } from "../../middleware/jwt";

const router = Router();

router.post("/login", authController.login);

router.get("/validatetoken", verifyToken, authController.validateToken);

router.post("/register", verifyToken, authController.register);

export default router;