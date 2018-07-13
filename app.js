const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

const index = require("./routes/index");
const books = require("./routes/books.js");
const authors = require("./routes/authors.js");

mongoose.connect("mongodb://localhost/jumpstart");
const db = mongoose.connection;
db.on("error", error => {
  console.error("An error occurred!", error);
});

const app = express();
app.use(logger("dev"));
app.use(express.json());

app.use("/", index);
app.use("/books", books);
app.use("/authors", authors);

module.exports = app;
