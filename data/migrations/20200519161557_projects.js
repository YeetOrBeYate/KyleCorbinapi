
exports.up = function(knex) {
    return knex.schema.createTable('project', tbl=>{

        tbl.increments();

        tbl.string('name', 240)
        .notNullable()
        .unique();

        tbl.text('picture')
        .notNullable()
        .unique();

        tbl.string('description', 250)
        .notNullable();

        tbl.text('about')
        .notNullable()
        .unique();

        tbl.string('url')
        .notNullable()
        .unique();

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project')
  };
