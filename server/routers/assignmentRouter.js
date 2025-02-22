const express = require('express');
const router = express.Router();
const assignmentController = require('../controller/AssignmentController');

router.post('/add/:class_code/', assignmentController.addAssignment);

// Get all assignments for a specific class
router.get('/get/:code', assignmentController.getAssignments);

module.exports = router;