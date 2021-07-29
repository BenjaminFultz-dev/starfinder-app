const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/database');

const app = express();

require('dotenv').config({path: './config/.env'})

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('auth', authRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running.`)
})