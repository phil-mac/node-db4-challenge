const db = require('../data/db-config')

module.exports = {
    getRecipesUsingIngredient,
}

function getRecipesUsingIngredient(ingredient_id){
    return db('steps')
    .join('recipes', 'steps.recipe_id', 'recipes.id')
    .select('recipes.name')
    .where('steps.ingredient_id', '=', ingredient_id)
}