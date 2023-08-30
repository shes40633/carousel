const mysql = require('mysql');


const SQLConnection = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'hsipl'
  });
  return connection;
};



// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports.SQLConnection = SQLConnection;