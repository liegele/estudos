const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World from ExpressJS server, Liégele!</h1>");
});

app.get("/contact", (erq, res) => {
  res.send("<h1>Contact me at liegele@gmail.com</h1>");
  // console.log("Contact me at liegele@gmail.com");
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>Hi there! I'm Liégele. I'm studing to get a IT job. I'm thinking about Backend development.</h1>"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
