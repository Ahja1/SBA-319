import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import db from './db/conn.mjs';

//creating express app
const app = express();
const PORT = process.env.PORT || 2020;

app.get ("/", (req, res) => {
    res.send(
        `<div>This is My Character Route</div>`
    );
});

//Start express server
app.listen(PORT, () => {
    console.log(`Listening`);
})

//Global error handling
app.use((err, _req, res, next) => {
    res.status (500).send("Seems like we messed up somewhere")
})



