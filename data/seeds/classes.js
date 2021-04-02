
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
      {
        class_id: 1, 
        name: 'get swole',
        type: 'grow muscles',
        start_time: '4:00',
        date: '6/09/2021',
        duration: 45,
        intensity_level: 'hard',
        location: 'gym',
        attendees: 0,
        // numRSVP: null,
        max_size: 30,
        instructor_username: 'Remy'
      },
      {
        class_id: 2, 
        name: 'yoga',
        type: 'yoga',
        start_time: '11:11',
        date: '4/05/2021',
        duration: 90,
        intensity_level: 'medium',
        location: 'Indonesian Dojo',
        attendees: 0,
        // numRSVP: null,
        max_size: 30,
        instructor_username: 'Chance'
      },
      {
        class_id: 3, 
        name: 'Aquatic Zumba',
        type: 'Senior Living',
        start_time: '4AM',
        date: 'Everyday',
        duration: 35,
        intensity_level: 'easy to medium',
        location: 'YMCA Shallow Pool',
        attendees: 0,
        // numRSVP: null,
        max_size: 30,
        instructor_username: 'Declan'
      },
      ]);
    });
};
