# Back-end
This is a readMe

exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments()
    tbl.string("username").notNullable().unique()
    tbl.string("first_name").notNullable()
    tbl.string("last_name").notNullable()
    tbl.string("email").notNullable()
    tbl.string("password").notNullable()
    tbl.string("role", 10).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
};



exports.up = function(knex) {
  return knex.schema.createTable("classes", tbl => {
    tbl.increments("class_id")
    tbl.string("name").notNullable().unique() // must be unique
    tbl.string("type").notNullable()
    tbl.string("start_time").notNullable()
    tbl.string("date").notNullable()
    tbl.integer("duration").notNullable()
    tbl.string("intensity_level").notNullable()
    tbl.string("location").notNullable()
    tbl.integer("attendees").notNullable()
    tbl.integer("max_size").notNullable()
    tbl.string("instructor_username").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("classes")
};







exports.up = function(knex) {
  return knex.schema.createTable("user_classes", tbl => {
    tbl.increments("uc_id")
    tbl.integer("user_id").notNullable().unsigned()
      .references("id").inTable("users")
      .onDelete("CASCADE")
    tbl.integer("class_id").notNullable().unsigned()
      .references("class_id").inTable("classes")
      .onDelete("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("user_classes")
};




seeds



exports.seed = function(knex) {
  return knex("classes").del()
    .then(function () {
      return knex("classes").insert([
        { 
          name: "Push-ups", 
          type: "resistance", 
          start_time: "10:00 a.m.", 
          date: "1/1/11",
          duration: 20,
          intensity_level: "medium",
          location: "1234 park address",
          attendees: 8,
          max_size: 10,
          instructor_username: "declan1248"
        }, // will get id: 1, can user_(id) be pulled from req?
        { 
          name: "Sprinting", 
          type: "cardio", 
          start_time: "10:30 a.m.", 
          date: "2/2/22",
          duration: 30,
          intensity_level: "high",
          location: "main street",
          attendees: 4,
          max_size: 8,
          instructor_username: "declan1248"
        } // will get id: 2, can user_(id) be pulled from req?
      ]);
    });
};
