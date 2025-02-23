const express = require("express");
const router = express.Router();
const classController = require("../controller/ClassController");

// Route to create a new class
router.post("/create/:uid/:name", classController.createNewClass);

// Route to get all classes assigned to a specific teacher
router.get("/teacher/:uid", classController.getAllClasses);

// Route to delete a class by ID
router.delete("/:classId/:uid", classController.deleteClass);

router.get("/verify_code/:code", classController.verifyCode);

// Route to join a class
router.post("/join/:uid/:code/:name", classController.joinClass);

// Route to get classes a student is part of
router.get("/student_classes/:uid", classController.getStudentClasses);

router.get("/getStudents/:code",classController.getStudents)

module.exports = router;
