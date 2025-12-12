const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Conectar BD
connectDB();

// Rutas
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
