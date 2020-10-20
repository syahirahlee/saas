const path = require('path');
const express = require('express');
const app = new express();
var router = express.Router();

//Following is backed up just in case it doesnt work.
//const publicPath = path.join(__dirname, '..', 'public');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 5000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
    console.log('call localhost:3000 to run');

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123123',
        database: 'seer',
        port: 5000
    });
    connection.connect();
    connection.query('select * from articles', function (err, rows, fields) {
        if (err) throw err

        console.log(rows)
    });
});
