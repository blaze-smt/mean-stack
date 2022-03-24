// Set Variables
const express = require("express");
const path = require("path");
const routes = require("./app/routes");

const app = express();

const port = process.env.PORT || 3000;

// EJS View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./app/views"));

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
