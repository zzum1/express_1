const fs = require('fs');

const hotels = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/hotels.json`)
);
console.log(hotels.length)

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

exports.checkBody = (req, res, next) => {
    if (req.body.length === undefined) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing body'
        });
    }
    next();
};

exports.getAllHotels = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: hotels.length,
        data: {
            hotels
        }
    });
};

exports.getHotel = (req, res) => {
    console.log('params', req.params);

    const hotel = hotels.find((el) => el.id == req.params.id);
    console.log('hotel', hotel);
    res.status(200).json({
        status: 'success',
        data: {
            hotel
        }
    });
};

exports.createHotel = (req, res) => {
    const newId = hotels[hotels.length -1].id + 1;
    const newHotel = Object.assign({id: newId}, req.body);
    hotels.push(newHotel);
    fs.writeFileSync(`${__dirname}/../data/hotels.json`, JSON.stringify(hotels), () => {
        res.status(201).json({
            status: 'success',
            data: {
                hotel: newHotel
            }
        });
    });
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