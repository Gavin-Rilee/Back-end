
exports.up = function(knex) {
    return knex.schema.createTable("instructorCode", tbl => {
        tbl.string('instructorCode')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("instructorCode")
};
