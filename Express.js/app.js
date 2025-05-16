const express = require("express");
const app = express();
const morgan = require('morgan')

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const authorise = (req, res, next) => {
const {user} = req.query;
if(user === 'john'){
  req.user = {name: 'john', id: 3}
  next()
} 
else{
  res.status(401).send('unAuthorized')
}
};

// app.use([logger, authorise]);
// app.use(express.static ('./public'))
app.use(morgan('tiny'))


app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/about", (req, res) => {
  res.send("Hello, world! <br> this is About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
