// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
var source = {
    localhost: {
        host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'i56lsza5p1eh0yxi',
        password: "zwc7f1qkf29w0xdn",
        database: "cat_db"
    }
}

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.localhost;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  define: { timestamps: false },
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;
