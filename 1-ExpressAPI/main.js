const express = require("express");
const fs = require("fs");
const app = express();


app.get("/users", (req, res) => {
  let data = fs.readFileSync("users.json");
  let parsedData = JSON.parse(data);
  
  res.send(parsedData);
});


app.get("/usersPictures", (req, res) => {
  let data = fs.readFileSync("usersPictures.json");
  let parsedData = JSON.parse(data);
  
  res.send(parsedData);
});


app.use("/static", express.static("public"));

app.listen("80". () => {
  console.log("Listening On Port 80.");
});
