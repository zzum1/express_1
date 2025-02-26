const express = require('express');
const hotelRoutes = require('./routes/hotelRoutes.js');

const app = express();

app.use(express.json());
app.use('/api/v1/hotels', hotelRoutes);

module.exports = app;