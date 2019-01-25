const express = require("express");
const app = express();

const courses = [
  {id: 1, name: "Course 1"},
  {id: 2, name: "Course 2"},
  {id: 3, name: "Course 3"}
];


app.get("/", (req, res) => {
  res.send("Root Page.");
});


app.get("/api/courses", (req, res) => {
  res.send(courses);
});


app.get("/api/courses/:id", (req, res) => {
  let course = "";
  
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id === req.params.id) {
      course = courses[i];
    }
  }
  
  if (course === "") {
    res.status(400).send("Error, Course Not Found.");
  } else {
    res.send(course);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening On Port: ${port}.`));
