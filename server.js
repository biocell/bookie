const express = require("express");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const books = require('./routes/books');
dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1/book', books);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on ${process.env.PORT} in ${process.env.NODE_ENV}`));