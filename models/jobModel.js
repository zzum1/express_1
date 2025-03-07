const mongoose = require('mongoose');

// apsirasome kaip atrodys duomenu bazes struktura (schema)
// schema - duomenu struktura

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: [true, 'Job title is required'],
    },
    workedHours: {
        type: Number,
        required: [true, 'Job salary is required'],
        values:[
            {min: 4, max: 12}
        ]
    },
    description: {
        type: String,
        required: [true, 'Job description is required'],
    },
    employeeName: {
        type: String,
        required: [true, 'Employee is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // paslepiame lauka, kad nebutu matomas vartotojui
        select: false,
    },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;