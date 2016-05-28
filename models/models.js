var Sequelize = require("sequelize");

var sequelizeConnection = require("../config/connection.js");

// Creates a "Cat" model that matches up with DB
var Cat = sequelizeConnection.define("cats", {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
   },
   user_id: {
       type: Sequelize.STRING
   },
   made_at: {
      type: Sequelize.DATE
   },
   betAmount: {
       type: Sequelize.INTEGER
   }, 
   colorChosen: {
       type: Sequelize.STRING
   }, 
   colorLanded: {
       type: Sequelize.STRING
   }, 
   user_win: {
       type: Sequelize.BOOLEAN
   }
});

var User = sequelizeConnection.define("users", {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
   },
   username: {
       type: Sequelize.STRING
   },
   email: {
       type: Sequelize.STRING
   },
   password_hash: {
       type: Sequelize.STRING
   },
   balance: {
      type: Sequelize.INTEGER, 
      defaultValue: 500
   },
   created_at: {
      type: Sequelize.DATE
   },
   updated_at: {
      type: Sequelize.DATE
   }
});


// looking up the best way to do this
Cat.belongsTo(User, {foreignKey: 'user_id'});
User.hasMany(Cat, {foreignKey: 'id'});

// Syncs with DB
Cat.sync();
User.sync();

// Makes the Cat Model available for other files (will also create a table)
module.exports = [Cat, User];