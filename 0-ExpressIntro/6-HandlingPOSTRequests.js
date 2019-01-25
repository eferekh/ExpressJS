const path = require("path");
const express = require("express");
const app = express();

const courses = [
  {id: 1, name: "Course 1"},
  {id: 2, name: "Course 2"},
  {id: 3, name: "Course 3"},
  {id: 4, name: "Course 4"}
];

// Middleware: To be able to fetch the post data from post request (req.body).
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/6-SendingPOSTRequest.html"));
});

app.post("/api/courses", (req, res) => {
  if (req.body.name == "") {
    res.status(400).send("Error, Name Is Required.");
    return;
  }
  
  if (req.body.name.length <= 3) {
    res.status(400).send("Error, Name Is Invalid.");
    return;
  }
  
  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  
  courses.push(course);
  
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening On Port: ${port}.`));
