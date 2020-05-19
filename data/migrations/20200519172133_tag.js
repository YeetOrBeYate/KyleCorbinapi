
exports.up = function(knex) {
    return knex.schema.createTable('tag',tbl=>{
        
        tbl.increments();

        tbl.string('name',60)
        .notNullable()
        .unique();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tag')
  };
