const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// Для парсинга application/json
app.use(express.json());
// Для парсинга aplication/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));
// Путь к папке с картинками
app.use("/static", express.static(__dirname + "/assets"))

app.use('/api/planes', require('./routes/planes'))

app.get('/', (req, res) => {
  res.send('Hello world!');
});

mongoose.connect('mongodb://127.0.0.1:27017/planes').then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
