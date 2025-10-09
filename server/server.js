import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/authRoutes.js";
import "./passport.js"; // google strategy setup

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// session for Google OAuth
app.use(session({
  secret: "supersecret",
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
