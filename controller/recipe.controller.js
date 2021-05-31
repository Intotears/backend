const db = require("../config/db.config.js");
const Recipe = db.recipe;


exports.create = (req, res) => {
  Recipe.create({
    recipeID: req.body.recipeID,
    recipeName: req.body.recipeName,
    recipeDescription: req.body.recipeDescription,
    recipeImage: req.body.recipeImage,
    time: req.body.time,
    shareOption: req.body.shareOption,
    serveNumbers: req.body.serveNumber,
  }).then((recipe) => {
    res.status(200).json({
      status: true,
      message: "Recipe created successfully",
    });
  });
};

exports.findAll = (req, res) => {
  Recipe.findAll().then((recipes) => {
    res.status(200).json({
      status: true,
      data: recipe,
    });
  });
};


exports.findByPk = (req, res) => {
  Recipe.findByPk(req.params.recipeID).then((recipes) => {
    res.status(200).json({
      status: true,
      data: recipes,
    });
  });
};


exports.update = (req, res) => {
  const id = req.params.recipeID;
  Book.update(
    {
      recipeName: req.body.recipeName,
      recipeDescription: req.body.recipeDescription,
      recipeImage: req.body.recipeImage,
      time: req.body.time,
      shareOption: req.body.shareOption,
      serveNumbers: req.body.serveNumber,
    },
    { where: { id: req.params.recipeID} }
  ).then(() => {
    res.status(200).json({
      status: true,
      message: "Recipe updated successfully with id = " + id,
    });
  });
};


exports.delete = (req, res) => {
  const id = req.params.recipeID;
  Book.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
      status: true,
      message: "Recipe deleted successfully with id = " + id,
    });
  });
};
