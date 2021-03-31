// Update with your config settings.
const pg = require('pg')

if(process.env.DATABASE_URL) {
  pg.defaults.ssl - { rejectUnauthorized: false }
}

const sharedConfig = {
  client:'pg',
  migrations: { directory: './migrations' },
  seed: { directory: './seeds' }
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'dev',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};