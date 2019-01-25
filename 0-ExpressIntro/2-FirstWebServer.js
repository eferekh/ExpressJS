const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Root Page");
});


app.get("/api/courses", (req, res) => {
  res.send(["Course 1", "Course 2", "Course 3"]);
});


app.listen("3000", () => console.log("Listening On Port: 3000."));
