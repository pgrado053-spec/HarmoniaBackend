const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");

const app = express();

// 🔐 CORS – permite front local y el de Vercel
app.use(
  cors({
    origin: [
      "http://localhost:5173",          // desarrollo front
      "https://tu-dominio-vercel.vercel.app", // cámbialo por el real
    ],
  })
);

app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);

// Puerto
const PORT = process.env.PORT || 4000;

// Conectar BD y luego levantar servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});
