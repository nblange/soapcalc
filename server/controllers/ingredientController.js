const Ingredient = require('../models/ingredients')

const createIngredient = function(req, res){
	const {
    id, name, sap, hardness, cleansing, condition1, bubbly, creamy, iodine, ins, lauric, myristic,
    palmitic, stearic, rincinoleic, oleic, linoleic, linolenic
		  } = req.body;
	var ingredient = new Ingredient(id, name, sap, hardness, cleansing, condition1, bubbly, creamy, iodine, ins, lauric,
     myristic, palmitic, stearic, rincinoleic, oleic, linoleic, linolenic)
    ingredient.save((err, dare) => err ? res.status(500).json(err) : res.json(dare))
}

const fetchAllIngredients = function(req, res) {
  Ingredient.fetchAllIngredients((err, result) => {
    if (err) {
      res.status(400).json({success: false, message: err})
    } else {
      res.json({
                success: true,
                result: result
              });
   }
 })
}

module.exports = {createIngredient, fetchAllIngredients};
