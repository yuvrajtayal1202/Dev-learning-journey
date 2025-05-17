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

app.get("/posts", authenticateToken, (req, res) => {
  res.send(posts.filter(post => post.username == req.user.name));
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers("authorization");
  const token = authHeader && authHeader.split(" ")(1);
  if (token == ull) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
    if (err) return res.sendStatus(403)
    req.user = user
  next()
  });
}

app.listen(4000);
