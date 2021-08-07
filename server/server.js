const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');
const skillRoutes = require('./routes/skill');
const featRoutes = require('./routes/feat');
const themeRoutes = require('./routes/theme');
const spellRoutes = require('./routes/spell');

const app = express();

require('dotenv').config({path: './config/.env'});

connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRoutes);
app.use('/skill', skillRoutes);
app.use('/feat', featRoutes);
app.use('/theme', themeRoutes);
app.use('/spell', spellRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running.`)
})