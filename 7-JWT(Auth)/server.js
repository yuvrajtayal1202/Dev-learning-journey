const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config(); // <-- Add this line

app.use(express.json()); // <-- Add this line

const posts = [
  {
    username: "yuvraj",
    title: "Post 1",
  },
  {
    username: "jim",
    title: "Post 2",
  },
];

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.listen(5000);