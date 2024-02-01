// Ваш файл server.js или другой файл, где находится серверная часть

const http = require('http');
const cors = require('cors');

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Max',
  password: 'clover',
  database: 'restaurant',
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from(password + '\0')
  }
});

connection.connect();
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('localhost:3000/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'Max',
      password: 'clover',
      database: 'restaurant',
    });

    await connection.execute(
      'INSERT INTO users (firstName, lastName, email, password) VALUES (name, role, email, password)',
      [firstName, lastName, email, password]
    );

    await connection.end();

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});



async function checkServer(port) {
  let isPortReachable;
  try {
    // Используйте динамический import вместо require
    ({ isPortReachable } = await import('is-port-reachable'));
  } catch (err) {
    console.error('Failed to import is-port-reachable:', err);
    return;
  }

  const isReachable = await isPortReachable(port);

  if (isReachable) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(`Server is not running on port ${port}`);
  }
}

app.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const connection = await mysql.createConnection(connectionConfig);

    const [results] = await connection.execute(
      'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, password]
    );

    await connection.end();

    res.json({ success: true, message: 'User registered successfully', results });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

const server = http.createServer(app);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});