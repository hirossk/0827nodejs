// mysqlモジュールを読み込む
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yoshida",
    password: "yoshida",
    database: "yoshida",
    port: 3003
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  exports.con = con;
