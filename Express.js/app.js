const express = require('express')
const app = express()
const { products, people } = require('./data')

app.get('/', (req,res) =>{
    res.json({products, people})
})

app.listen(4000, ()=>{
    console.log("Server is listening on port 4000")
})