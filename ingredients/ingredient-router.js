const express = require('express')

const Ingredients = require('./ingredient-model')

const router = express.Router()

router.get('/:id/recipes', (req, res, next) => {
    Ingredients.getRecipesUsingIngredient(req.params.id)
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;