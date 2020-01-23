exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, instructions: "add tortilla to plate", recipe_id: 2, ingredient_id: 4, quantity: 1.0},
    {step_number: 2, instructions: "put hummus on tortilla ", recipe_id: 2, ingredient_id: 6, quantity: 0.2},
    {step_number: 3, instructions: "add chicken ", recipe_id: 2, ingredient_id: 2, quantity: 0.5},
    {step_number: 4, instructions: "add spinach ", recipe_id: 2, ingredient_id: 3, quantity: 0.1},
    {step_number: 1, instructions: "add spinach to bowl", recipe_id: 3, ingredient_id: 3, quantity: 0.3},
    {step_number: 2, instructions: "add chicken to bowl", recipe_id: 3, ingredient_id: 2, quantity: 0.5},
  ]);
};
