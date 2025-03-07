const express = require('express');
const jobController = require('../controllers/jobController.js');

const router = express.Router();


// Get all jobs
router
    .route('/')
    .get(jobController.getAllJobs)

// Get single job
router
    .route('/:id')
    .get(jobController.getSingleJob);

// Create new job
router
    .route('/')
    .post(jobController.createJob);

router
    .route('/hours/:id')
    .get(jobController.getEmployeeWorkHours);    

module.exports = router;    