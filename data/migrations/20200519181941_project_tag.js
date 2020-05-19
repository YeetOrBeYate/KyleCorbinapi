
exports.up = function(knex) {
    return knex.schema.createTable('project_tag',tbl=>{

        tbl.primary(['project_id', 'tag_id'])

        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('project')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        tbl.integer('tag_id')
        .unsigned()
        .references('id')
        .inTable('tag')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_tag')
  };