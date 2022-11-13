const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //   console.log(__dirname);
});

app.post("/", (req, res) => {
  //   console.log(req.body);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send(`Result of operation is: ${result}`);
});

app.listen(port, () => {
  console.log(`Calculator app listen from port number ${port}`);
});
