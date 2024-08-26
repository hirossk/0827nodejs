// mysqlモジュールを読み込む
const mysql = require('mysql');

// mariadbへの接続
var con = mysql.createConnection({
    host: "localhost",    user: "yoshida",
    password: "yoshida",    database: "yoshida",
    port: 3003  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");　//接続完了メッセージ
  });
//接続を呼び出し元と共有
exports.con = con;
