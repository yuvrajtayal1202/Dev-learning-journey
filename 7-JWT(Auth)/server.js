const express = require('express')
const app = express()


const posts = [
    {
        username: "yuvraj",
        title: "Post 1"
    },  {
        username: "jim",
        title: "Post 2"
    }
]

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.listen(5000)