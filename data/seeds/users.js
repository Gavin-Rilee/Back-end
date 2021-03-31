
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'remyboii',
          first_name: 'Remy',
          last_name: 'Boii',
          email: 'remyboii@gmail.com',
          password: 'mightBeRemyBoii',
          role: 'instructor',
          didVisit: false
        },
      ]);
    });
};
