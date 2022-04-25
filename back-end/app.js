import express, { json } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(json());

const users = [];
const tweets = [];

app.listen(PORT, () => console.log(`Server live at http://localhost:${PORT}/`));

app.post("/sign-up", (req, res) => {
    users.push(req.body);
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    tweets.push(req.body);
    res.send("OK");
});