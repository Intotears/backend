const db = require("../config/db.config.js");
const RecipeIngredient = db.recipeIngredient;

exports.create = (req, res) => {
  RecipeIngredient.create({
    quantityValue: req.body.quantityValue,
    recipeID: req.body.recipeID,
    ingredientID: req.body.ingredientID,
    categoryID: req.body.categoryID,
    unitID: req.body.unitID,
  }).then((recipe) => {
    res.status(200).json({
      status: true,
      message: "Recipe ingredients created successfully",
    });
  });
};

exports.findAll = (req, res) => {
  RecipeIngredient.findAll().then((recipeIngredients) => {
    res.status(200).json({
      status: true,
      data: recipeIngredients,
    });
  });
};

exports.findByPk = (req, res) => {
    RecipeIngredient.findByPk(req.params.re_IngredientsID).then((recipeIngredient) => {
      res.status(200).json({
        status: true,
        data: recipeIngredient,
      });
    });
  };

exports.update = (req, res) => {
  const id = req.params.re_IngredientsID;
  Book.update(
    {
      quantityValue: req.body.quantityValue,
      recipeID: req.body.recipeID,
      ingredientID: req.body.ingredientID,
      categoryID: req.body.categoryID,
      unitID: req.body.unitID,
    },
    { where: { id: req.params.re_IngredientsID } }
  ).then(() => {
    res.status(200).json({
      status: true,
      message: "Recipe ingredients updated successfully with id = " + id,
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.re_IngredientsID;
  Book.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
      status: true,
      message: "Recipe ingredients deleted successfully with id = " + id,
    });
  });
};
