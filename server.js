// import Express.js and Handlebars.js packages
const express = require("express");
const exphbs = require("express-handlebars"); 
const path = require("path");

// set up PORT
const PORT = process.env.PORT || 8080;

// set up Express
const app = express();

// serve static content from 'public' directory
app.use(express.static("public"));

// set up Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
require("./routes/htmlRoutes.js")(app);

// turn on listener
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });