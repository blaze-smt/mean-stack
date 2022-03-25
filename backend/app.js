// Set Variables
const express = require("express");
const path = require("path");
const routes = require("./app/routes");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

const userRoute = require('./app/routes/user.route');

// Connecting with mongo db
mongoose
  .connect('mongodb://127.0.0.1:27017/portfolio-db')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

// Setting up port with express js
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(cors());
app.use(express.static(path.join(__dirname, 'mean-portfolio')));
app.use('/', express.static(path.join(__dirname, 'mean-portfolio')));
app.use('/api', userRoute);

// Set path for static folder
app.use(express.static(path.join(__dirname, "./public/static")));

// Route for index page
app.use("/", routes);

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
