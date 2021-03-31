
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
      {
        class_id: 1, 
        name: 'get swole lol',
        type: 'grow cheeks',
        start_time: '4:20',
        date: '6/09/2021',
        duration: 45,
        intensity_level: 'so hard',
        location: 'Willy Wonkas Chocolate Factory',
        attendees: 0,
        // numRSVP: null,
        max_size: 30,
        instructor_username: 'Remy'
      },
      ]);
    });
};
