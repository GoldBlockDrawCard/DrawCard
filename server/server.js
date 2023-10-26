require('dotenv').config();

const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

const port = process.env.PORT || 3000;

// Static File Service
app.use(express.static('public'));
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONNECT TO MONGODB SERVER
require('./config/db');

// ROUTERS
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server listening on port localhost:${port}`);
});


