import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

import connectDB from "./db/index.js";

connectDB();

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";
const app = express();

;(async () => {
    try {
        // MongoDB connection
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("📌 MongoDB connected successfully!");

        // Express error handler
        app.on("error", (err) => {
            console.error("Express ERROR:", err);
            throw err;
        });

        // Start server
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server started at http://localhost:${process.env.PORT}`);
        });

    } catch (err) {
        console.error("❌ ERROR:", err);
        throw err;
    }
})();
*/