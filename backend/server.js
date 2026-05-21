import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "TRAVIVA backend is running",
    status: "ok",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});

app.use((error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({ message: "Something went wrong on the server" });
});

app.listen(PORT, () => {
  console.log(`TRAVIVA server running on port ${PORT}`);
});
