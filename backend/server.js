import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
import connectDB  from "./src/database/db.js";
import { EsewaInitiatePayment, paymentStatus } from "./src/controller/esewa.controller.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //this is for form data like email and password
connectDB();
app.post("/initiate-payment", EsewaInitiatePayment);
app.post("/payment-status", paymentStatus);
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Server is running");
})
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})