const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yoshida",
    password: "yoshida",
    port: 3003
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
