// Ваш файл server.js или другой файл, где находится серверная часть

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Max',
  password: 'clover',
  database: 'restaurant',
  authSwitchHandler: (data, cb) => {
    if (data.pluginName === 'caching_sha2_password') {
      // Используйте плагин authSwitchHandler для аутентификации
      const password = 'clover';
      const securePassword = require('secure-password');
      const pwd = securePassword();
      const hash = pwd.hashSync(Buffer.from(password));
      cb(null, Buffer.from([hash]));
    }
  }
});

connection.connect();

app.post('/api/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const sql = 'INSERT INTO user (firstName, lastName, email, password) VALUES (name, role, email, password)';
  const values = [firstName, lastName, email, password];

  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Ошибка при вставке данных в базу данных:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Данные успешно добавлены в базу данных');
      res.json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
