exports.seed = function(knex) {
    return knex('recipes').insert([
      {name: 'turkey sandwich'},
      {name: 'chicken burrito'},
      {name: 'chicken salad'}
    ]);
};
