
exports.up = function(knex) {
    return knex.schema.createTable('quote', tbl=>{

        tbl.increments();

        tbl.string('line')
        .notNullable();

        tbl.string('author')
        .notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('quote')
  };
