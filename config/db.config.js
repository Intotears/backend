const dbCon = require("./db.connection.js");

const Sequelize = require("sequelize"); 

const sequelize = new Sequelize(dbCon.database, dbCon.username, dbCon.password, {
  host: dbCon.host,
  dialect: dbCon.dialect,
  operatorsAliases: false,
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.recipe = require("../model/recipe.model.js")(sequelize, Sequelize);
db.recipeIngredient = require("../model/recipeIngredient.model.js")(sequelize, Sequelize);

module.exports = db;
module.exports = sequelize;