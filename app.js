const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed");

const app = express();

app.use(bodyParser.json());

app.use(feedRoutes);

mongoose
  .connect("mongodb+srv://name:password@reactrest-dkohi.mongodb.net/barber", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    app.listen(8080);
    console.log("connected");
  })
  .catch(err => console.log(err));

// app.listen(8080);
