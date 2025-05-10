import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import DbConnect from "./Config/DB.js";
import authRoutes from "./Routes/authRoutes.js";
import logicRoutes from "./Routes/logicRoutes.js";

const port = process.env.port || 3000;
const app = express();
DbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/user",logicRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
