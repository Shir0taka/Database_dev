const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Max',
  password: 'clover',
  database: 'restaurant',
});

connection.connect();

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM user', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/api/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const sql = 'INSERT INTO user (firstName, lastName, email, password) VALUES (name, role, email, password)';
  
    connection.query(sql, [firstName, lastName, email, password], (error, results, fields) => {
      if (error) {
        console.error('Ошибка при вставке данных:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
      } else {
        console.log('Данные успешно вставлены в базу данных.');
        res.status(200).json({ message: 'Данные успешно сохранены' });
      }
    });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});