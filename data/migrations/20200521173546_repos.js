
exports.up = function(knex) {
    return knex.schema.createTable('repo', tbl=>{

        tbl.increments();


        tbl.string('url')
        .notNullable()
        .unique();

        tbl.string('name')
        .notNullable()

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
    return knex.schema.dropTableIfExists('repo')
};

