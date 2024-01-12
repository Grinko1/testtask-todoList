const express = require('express');
const mongoose = require('mongoose');
const todoRoute = require('./routes/todoRoute');
const cors = require('cors');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 8000;
const MYDB = process.env.MYDB;


const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json({ extended: true }));
app.use('/api/todos', todoRoute);

async function start() {
  try {
    await mongoose.connect(
      MYDB,
      {},
    );
    app.listen(PORT, () => {
      console.log(`Server start on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
