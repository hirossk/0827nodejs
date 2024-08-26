const mysql = require('./mysqldba')
// expressモジュールを読み込む
const express = require('express');

// データの受け取りにはbody-parserが便利
const bodyParser = require('body-parser');
// expressアプリを生成する
const app = express();

// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/animal', (req, res) => {
    ret_data = []
    mysql.con.query('SELECT * from animal;', function (err, rows, fields) {
        if (err) { console.log('err: ' + err); }
        for (const line of rows){
            ret_data.push(line);
        };
        res.send(ret_data);
    });
});

app.post('/animal', (req, res) => {
    // 送られてきたデータはreq.body.キー名で取り出すことができる
    const name = req.body.name;
    const query = "INSERT INTO animal (name) VALUES (?)";
    mysql.con.query(query, [name], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ error: "データベースへの挿入に失敗しました" });
        } else {
            res.status(200).json({ message: "挿入されました" });
        }
    });
});

// 静的ファイルのルーティング
// ルート「/」にアクセスしてきたら「public」以下を静的に参照する
app.use(express.static('./public'));
// ファイルが見つからなかったら404エラーとする
app.use((req, res) => {
    res.sendStatus(404);
});
// ポート3000でサーバを立てる
app.listen(3000, () => {
    console.log('Listening on port 3000');
});