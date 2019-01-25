const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Root Page");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/blog/:year/:month", (req, res) => {
  res.send(req.params.year + " " + req.params.month);
  
  // This is how we fetch the request link (year, month)
  res.send(req.params);
  
  // This is how we fetch the query string (url?sortBy=name)
  res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening On Port: ${port}.`));
