const express = require('express')

const Recipes = require('./recipe-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id/shoppingList', (req, res, next) => {
    Recipes.getShoppingList(req.params.id)
    .then(shoppingList => {
        res.json(shoppingList);
    })
    .catch(err => {
        next(err)
    })
})

router.use((err, req, res, next) => {
    console.log(err);
    res.json({message: "error!!!"})
})

module.exports = router;