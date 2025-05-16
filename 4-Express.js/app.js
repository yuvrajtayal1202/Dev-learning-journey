const express = require("express");
const app = express();
// let { people } = require('./data') // Not needed here

// static assets
// app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

const peopleRouter = require("./routes/people"); // <-- FIXED
const authRouter = require("./routes/auth"); // <-- FIXED
app.use("/api/people", peopleRouter); // <-- FIXED
app.use("/login", authRouter); // <-- FIXED

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
