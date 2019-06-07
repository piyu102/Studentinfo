
exports.up = function (knex, Promise) {
    return knex.schema.createTable('studentinfo', function (table) {
        table.increments().unsigned().primary();
        table.string('name');
        table.integer('rollNumber');
        table.integer('age');
        table.string('email');
        table.string('mobileNumber');
        table.string('collegename');
        table.string('course');
        table.string('branch');
        table.integer('sem');
        table.timestamps(false, true);


    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('studentinfo');

};
