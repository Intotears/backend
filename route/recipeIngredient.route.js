module.exports = function (app) {
  
    const recipeIngredient = require("../controller/recipeIngredient.controller.js");
  
    app.post("/", recipeIngredient.create);

    app.get("/api/recipes/:", recipeIngredient.findAll);
    
    app.get("/api/recipes/:recipeID", recipeIngredient.findByPk);
  
  
    app.put("/api/recipes/:recipeID", recipeIngredient.update);
  
    
    app.delete("/api/recipes/:recipeID", recipeIngredient.delete);
  };
  