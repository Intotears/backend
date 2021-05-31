module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define(
    "recipe",
    {
      recipeID: {
        type: Sequelize.INTEGER,
      }, 
      recipeName: {
        type: Sequelize.STRING(100),
      },
      recipeDescription: {
        type: Sequelize.STRING(200),
      },
      recipeImage: {
        type: Sequelize.TEXT,
      },
      time: {
        type: Sequelize.STRING(10),
      },
      shareOption: {
        type: Sequelize.BOOLEAN,
      },
      serveNumber: {
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return Recipe;
};
