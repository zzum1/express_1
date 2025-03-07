const fs = require('fs');
const Hotel = require('../models/hotelModel.js');

const hotels = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/hotels.json`)
);

//Middleware papildoma funckija kur yra tarp requesto ir response (kuri tikrina duomenis pvz id)

exports.checkId = (req, res, next) => {
    if (req.params.id > hotels.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid Id'
        });
    }
    next();
}

// exports.checkBody = (req, res, next) => {
//     if (req.body.length === undefined) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Missing body'
//         });
//     }
//     next();
// };

exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json({
            status: 'success',
            data: {
                hotels
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: error
        });
    }
};

exports.getHotel = async (req, res) => {
try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            hotel
        }
    });
} catch (error) {
    res.status(404).json({
        status: 'Failed',
        message: error
    });
    
}
};

exports.createHotel = async (req, res) => {
    try{
        const newHotel = await Hotel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                hotel: newHotel
            }
        });
    }catch(err){
        res.status(400).json({
            status: 'Fail',
            message: err
        });
    }
};

exports.updateHotel = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            hotel: 'Hotel updated'
        }
    });
};

exports.deleteHotel = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: {
            hotel: 'Hotel deleted'
        }
    });
};