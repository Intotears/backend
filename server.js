const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./config/db.config.js");

require("./route/recipe.route.js")(app);
require("./route/recipeIngredient.route.js")(app);

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Application request listening at http://%s:%s", host, port);
});

