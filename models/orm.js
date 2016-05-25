var connection = require('./connection.js');

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

var orm = {
  create: function(table, vals, cb) {

    var queryString = 'INSERT INTO ' + table + ' (id,burger_name,devoured,date) VALUES (default,"' + vals + '",0,current_timestamp)';

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);

    });
  },

  update: function(table, key, cb) {

    var queryString = 'UPDATE ' + table + ' SET devoured = 1 WHERE id = ' + key;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);

    });
  },

  showall: function(table, cb) {
    var queryString = 'SELECT * FROM ' + table;

    console.log(queryString)

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  empty: function(table, cb) {
    var queryString = 'DELETE FROM ' + table;

    connection.query(queryString, function(err, result) {
      if (err) throw err;

      var queryString = 'ALTER TABLE ' + table + ' AUTO_INCREMENT = 0';

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result)
        cb(result);
      })
    })
  }
};

module.exports = models;
