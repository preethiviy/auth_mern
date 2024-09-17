import { Router } from "express";
import { loginHandler, logoutHandler, refreshHandler, registerHandler, sendPasswordResetHandler, verifyEmailHandler } from "../controllers/auth.controller";

const authRoutes = Router();

//prefix: /auth
authRoutes.post("/register", registerHandler);
authRoutes.post("/login", loginHandler);
authRoutes.get("/refresh", refreshHandler);
authRoutes.get("/logout", logoutHandler);
authRoutes.get("/email/verify/:code", verifyEmailHandler);
authRoutes.post("/password/forgot", sendPasswordResetHandler);

export default authRoutes;