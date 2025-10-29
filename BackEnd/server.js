import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
 res.json({ message: "API Biblioteca funcionando " });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});