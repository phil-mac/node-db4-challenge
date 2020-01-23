exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'lb of turkey'},
    {name: 'lb of chicken'},
    {name: 'lb of spinach'},
    {name: 'tortilla'},
    {name: 'slice of bread'},
    {name: 'lb of hummus'},
  ]);
};
