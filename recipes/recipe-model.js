const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('steps')
    .join('ingredients', 'steps.ingredient_id', 'ingredients.id')
    .select('steps.quantity', 'ingredients.name')
    .where('steps.recipe_id', '=', recipe_id)

}

function getInstructions(){
    return db('recipes')
}