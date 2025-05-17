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

let refreshTokens =[]

app.delete('/logout', (req,res) => {
    refreshTokens = refreshTokens.filter(token => token != req.body.token)
    res.sendStatus(204)
})

app.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        const accessToken = generateAccessToken({ name: user.name }); // fixed typo
        res.json({ accessToken: accessToken }); // moved inside callback
    });
});
app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  res.json({ accessToken: accessToken,  refreshToken : refreshToken});
});

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})
}
app.listen(4000);
