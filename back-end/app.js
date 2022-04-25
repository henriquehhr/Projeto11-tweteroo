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

app.get("/tweets", (req, res) => {

    const lastTweets = [];
    const lastIndex = tweets.length < 10 ? 0 : tweets.length - 10;
    if (tweets.length == 0) {
        res.send(lastTweets);
        return;
    }
    for (let i = tweets.length - 1; i >= lastIndex; i--) {
        const tweet = {
            username: tweets[i].username,
            avatar: users.find(user => user.username == tweets[i].username).avatar,
            tweet: tweets[i].tweet
        };
        lastTweets.push(tweet);
    }
    res.send(lastTweets);
});