const mongoose = require('mongoose');

// apsirasome kaip atrodys duomenu bazes struktura (schema)
// schema - duomenu struktura
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Hotel name is required'],
        unique: true,
    },
    address: {
        type: String,
        required: [true, 'Hotel address is required'],
    },
    ranking: {
        type: Number,
        default: 4.5,
        required: [true, 'Hotel ranking is required'],
        min: [1, 'Hotel ranking must be between 1 and 5'],
        max: [5, 'Hotel ranking must be between 1 and 5'],
    },
    price: {
        type: Number,
        required: [true, 'Hotel price is required'],
    },
    comfort: {
        type: Number,
        required: [true, 'Hotel comfort is required'],
        values: [
            1, 2, 3, 4, 5   // 1 - very bad, 2 - bad, 3 - normal, 4 - good, 5 - very good
        ]
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'Hotel summary is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // paslepiame lauka, kad nebutu matomas vartotojui
        select: false,
    },
});
// Identifikuojame modeli pagal pavadinima ir schema
// Hotel - modelio pavadinimas
// hotelSchema - schema pagal kuri bus kuriamas modelis
// modelis - duomenu bazes lentele
// schema - lenteles struktura
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;