const express = require("express");
const router = express.Router();
const studentController = require("../controller/StudnetController");

// Route to create a new student
router.post("/create", studentController.createNewStudent);

module.exports = router;
