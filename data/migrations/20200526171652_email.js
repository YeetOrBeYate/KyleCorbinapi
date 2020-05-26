
exports.up = function(knex) {
    return knex.schema.createTable('email', tbl=>{

        tbl.increments();

        tbl.string('name')
        .notNullable()

        tbl.string('email')
        .notNullable()

        tbl.text('message')
        .nullable()

        tbl.string('date')
        .notNullable()

        tbl.string('error')
        .nullable();

        tbl.string('phone')
        .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('email')
  };
