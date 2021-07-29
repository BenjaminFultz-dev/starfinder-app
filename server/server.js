const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 9000;
dotenv.config();

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirName + '/index.html')
});

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));