import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';
import characterRoutes from './controllers/character.mjs';


//creating express app
const app = express();
const PORT = process.env.PORT || 2020;

// app.use(express.json());

// ================ Set up view engine ================
//
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


// ================ Middleware ================
//
app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));
///
app.use("/characters", characterRoutes);

app.get ('/', (req, res) => {
    res.send(
        `<div>This is My Character Route<br/><a href='/characters'>characters</a></div>`
    );
});


//Global error handling
app.use((err, _req, res, next) => {
    res.status (500).send("Seems like we messed up somewhere")
})

//Start express server
app.listen(PORT, () => {
    console.log(`Listening`);
});
