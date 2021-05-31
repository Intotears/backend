module.exports = function (app) {
  
    const recipe = require("../controller/recipe.controller.js");
  
    app.post("/api/createRecipe", recipe.create);
  
    
    app.get("/api/recipes", recipe.findAll);
  
    
    app.get("/api/recipes/:recipeID", recipe.findByPk);
  
  
    app.put("/api/recipes/:recipeID", recipe.update);
  
    
    app.delete("/api/recipes/:recipeID", recipe.delete);
  };
  