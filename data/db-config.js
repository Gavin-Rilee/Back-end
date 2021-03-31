const dbEngine = process.env.DB_ENVIRONMENT || 'development'
const knex = require('knex')
const configs = require('../knexfile')
const PORT=5000

module.exports = {
    dbEngine,
    PORT,
    configs,
    knex,
}