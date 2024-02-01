const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Max',
  password: 'clover',
  database: 'Restaurant',
});

connection.connect();

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM User', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});