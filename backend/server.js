import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({
  path: path.join(__dirname, ".env")
});

const app = express();
app.use(cors());
app.use(express.json());

// Routes
import paymentRoutes from "./routes/payment.js";
app.use("/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// Render uses process.env.PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
