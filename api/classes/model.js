const db = require("../../data/db-config")

module.exports = {
  find,
  findBy,
  add,
  update,
  remove
}

function find() {
  return db("classes").orderBy("class_id")
}

function findBy(filter) {
  return db("classes").where(filter).first()
}

async function add(body) {
  const [lesson] = await db("classes").insert(body, "name")
  return db("classes").where("name", lesson).first()
}

async function update(changes, id) {
  const data = await db("classes").where("class_id", id).update(changes)
  return db("classes").where("class_id", id).first()
}

async function remove(id) {
  return db("classes").where({ class_id: id }).del()
}
