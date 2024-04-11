import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 2020;
const app = express();

app.use(express.json());

app.get ("/", (req, res) => {
    res.send("My API")
});

//Global error handling
app.use((err, _req, res, next) => {
    res.status (500).send("Seems like we messed up somewhere")
})

//Start express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

