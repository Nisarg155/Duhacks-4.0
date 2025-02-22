const express = require("express");
const router = express.Router();
const teacherController = require("../controller/TeacherController");

// Route to create a new teacher
router.post("/create", teacherController.createNewTeacher);

module.exports = router;
