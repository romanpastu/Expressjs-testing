const express = require("express")
const app = express();
const todoRoutes = require("./routes/todo.routes")
const mongodb = require("./mongodb/mongodb.connect")
require('dotenv').config()

mongodb.connect();

app.use(express.json())

app.use("/todos", todoRoutes);

app.get("/", (req,res) => {
    res.json("Hello world");
});


module.exports = app;