const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');
const skillRoutes = require('./routes/skill');
const featRoutes = require('./routes/feat');

const app = express();

require('dotenv').config({path: './config/.env'});

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRoutes);
app.use('/skill', skillRoutes);
app.use('/feat', featRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server is running.`)
})