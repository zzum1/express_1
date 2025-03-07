const express = require('express');
const hotelController = require('../controllers/hotelController.js');

const router = express.Router();

router

router
    .route('/')
    .get(hotelController.getAllHotels)
    .post(hotelController.createHotel);

router
    .route('/:id')
    .get(hotelController.getHotel)
    .patch(hotelController.updateHotel)
    .delete(hotelController.deleteHotel);

router
    .route('/')
   

module.exports = router;