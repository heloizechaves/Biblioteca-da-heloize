import express from "express";
import { registrarUsuario } from "../controllers/userControllers";

const router = express.Router();

router.post("/register", registrarUsuario);

export default router;