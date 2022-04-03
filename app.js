// Set Variables
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

// Connecting with Mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio-db")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });

// JSON Parser
app.use(bodyParser.json());

// CORS Headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Dislay Angular build directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "./static")));

// Display Routes
const homeRouter = require("./routes/index");
app.use("/", homeRouter);

const skillsRouter = require("./routes/skills");
app.use("/skills", skillsRouter);

const projectsRouter = require("./routes/projects");
app.use("/projects", projectsRouter);

const contactRouter = require("./routes/contact");
app.use("/contact", contactRouter);

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
