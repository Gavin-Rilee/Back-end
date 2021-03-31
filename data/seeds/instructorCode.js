
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructorCode').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructorCode').insert([
        {
          instructorCode: 'abc123'
        },
      ]);
    });
};
