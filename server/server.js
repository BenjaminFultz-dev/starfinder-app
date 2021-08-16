const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home');
const skillRoutes = require('./routes/skill');
const featRoutes = require('./routes/feat');
const themeRoutes = require('./routes/theme');
const spellRoutes = require('./routes/spell');
const raceRoutes = require('./routes/race');
const classRoutes = require('./routes/class');
const biohackerRoutes = require('./routes/biohacker');
const droneRoutes = require('./routes/drone');
const envoyRoutes = require('./routes/envoy');
const mechanicRoutes = require('./routes/mechanic');
const mysticRoutes = require('./routes/mystic');
const operativeRoutes = require('./routes/operative');
const solarianRoutes = require('./routes/solarian');
const soldierRoutes = require('./routes/soldier');
const technomancerRoutes = require('./routes/technomancer');
const vanguardRoutes = require('./routes/vanguard');
const witchwarperRoutes = require('./routes/witchwarper');

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
app.use('/race', raceRoutes);
app.use('/class', classRoutes);
app.use('/biohacker', biohackerRoutes);
app.use('/drone', droneRoutes);
app.use('/envoy', envoyRoutes);
app.use('/mechanic', mechanicRoutes);
app.use('/mystic', mysticRoutes);
app.use('/operative', operativeRoutes);
app.use('/solarian', solarianRoutes);
app.use('/soldier', soldierRoutes);
app.use('/technomancer', technomancerRoutes);
app.use('/vanguard', vanguardRoutes);
app.use('/witchwarper', witchwarperRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running.`)
})