// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host:'localhost',
      database: 'portfolio',
      user: 'portfolio',
      password: process.env['PASSWORD']
    },
    migrations:{
      directory: "./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    }

  },

  
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations:{
      directory: "./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    }
  }
};

