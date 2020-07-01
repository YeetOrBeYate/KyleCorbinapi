
exports.up = function(knex) {
    return knex.schema.createTable('project_pics', tbl=>{
        
        tbl.increments();

        tbl.text('picture')
        .notNullable()
        .unique();

        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('project')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_pics')
  };
