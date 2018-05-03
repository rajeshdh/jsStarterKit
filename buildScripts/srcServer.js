const express = require("express");
const path = require("path");
const open = require("open");

const port = 3000;

var app = express();
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
