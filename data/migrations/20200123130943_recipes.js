
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments()

    tbl.string('name', 128).notNullable().index()
  })
  .createTable('ingredients', tbl => {
    tbl.increments()

    tbl.string('name', 128).notNullable().index()
  })
  .createTable('steps', tbl => {
    tbl.increments()

    tbl.integer('step_number').notNullable()
    tbl.string('instructions', 1024).notNullable()

    tbl.integer('recipe_id')
        .unsigned().notNullable()
        .references('id').inTable('recipes')
        .onDelete()
        .onUpdate('CASCADE')

    tbl.integer('ingredient_id')
        .unsigned()
        .references('id').inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

    tbl.float('quantity')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')

};
