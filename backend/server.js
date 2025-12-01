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
// Enable CORS for all origins by default; you can restrict this to your Netlify origin in production
app.use(cors());
app.options('*', cors());
app.use(express.json());

// Simple request logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
import paymentRoutes from "./routes/payment.js";
app.use("/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.json({ status: "Backend running successfully 🚀" });
});

// Render uses process.env.PORT
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
  // In production you might want to restart the process
});
