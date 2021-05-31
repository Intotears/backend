module.exports = (sequelize, Sequelize) => {
  const RecipeIngredient = sequelize.define(
    "recipeIngredient",
    {
      re_IngredientsID: {
        type: Sequelize.INTEGER,
      },
      quantityValue: {
        type: Sequelize.INTEGER,
      },
      recipeID: {
        type: Sequelize.INTEGER,
      },
      ingredientID: {
        type: Sequelize.INTEGER,
      },
      categoryID: {
        type: Sequelize.INTEGER,
      },
      unitID: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return RecipeIngredient;
};
