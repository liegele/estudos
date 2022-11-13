const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //   console.log(__dirname);
});

app.listen(port, () => {
  console.log(`Calculator app listen from port number ${port}`);
});
