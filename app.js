const express = require('express');
const hotelRoutes = require('./routes/hotelRoutes.js');
const jobRoutes = require('./routes/jobRoutes.js');

const app = express();

app.use(express.json());
app.use('/api/v1/hotels', hotelRoutes);
app.use('/api/v1/jobs', jobRoutes);

module.exports = app;