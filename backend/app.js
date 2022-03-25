// Set Variables
const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

const userRoute = require('./routes/user.route');

// Connecting with Mongodb
mongoose
  .connect('mongodb://127.0.0.1:27017/portfolio-db')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

// JSON Parser
app.use(bodyParser.json());

// Angular build directory
var distDir = __dirname + "../mean-portfolio/dist/";
app.use(express.static(distDir));

// Error Handling
app.use((err, request, response, next) => {
  response.locals.message = err.message;
  console.error(err);
  const status = err.status || 500;
  response.locals.status = status;
  response.status(status);
  response.render("error");
});

// Listens on port Variable
app.listen(port, () => console.log(`Listening on port ${port}`));
