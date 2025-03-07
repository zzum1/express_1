const Job = require('../models/jobModel.js');

// Get single job
exports.getSingleJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                job
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Job not found'
        });
    }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({
            status: 'success',
            data: {
                jobs
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: error
        });
    }
};

exports.createJob = async (req, res) => {
    try {
        const newJob = await Job.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                job: newJob
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error
        });
    }
};

exports.getEmployeeWorkHours = async (req, res) => {
    try {
        const job = await Job.find(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                job
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: error
        });
    }
}