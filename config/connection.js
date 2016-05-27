// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize"),
  connection;
if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize("cats_db", "root", "e665", {
    host: 'localhost',
    dialect: "mysql",
    port: "3000"
  })
}


// Lists out connection options
var source = {
    localhost: {
        host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'i56lsza5p1eh0yxi',
        password: "zwc7f1qkf29w0xdn",
        database: "r1kt0y6mc7oyncc9"
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
