const express = require("express");
const router = express.Router();
const classController = require("../controller/ClassController");

// Route to create a new class
router.post("/create", classController.createNewClass);

// Route to get all classes assigned to a specific teacher
router.get("/teacher/:uid", classController.getAllClasses);

// Route to delete a class by ID
router.delete("/:classId", classController.deleteClass);

module.exports = router;
