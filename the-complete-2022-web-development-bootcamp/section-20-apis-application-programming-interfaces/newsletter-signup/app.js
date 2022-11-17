const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('Newsletter app');
  res.sendFile(__dirname + '/signup.html');
  //   res.send('Newsletter app working...');
});

app.listen(3000, () => {
  console.log(`Server is listen on port 3000`);
});
