const express = require("express");
const https = require("node:https");
const app = express();

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=-12.9822&lon=-38.4812772&appid=5a143d19ba7dbc688f7a14262e7ec700&units=metric";
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (data) => {
      //   console.log(data);
      const weatherData = JSON.parse(data);
      console.log(`${weatherData.main.temp} ºC`);
    });
  });
  res.send("Weather app is running...");
});

app.listen(3000, () => {
  console.log("Server is listen on port 3000.");
});
