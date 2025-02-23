const express = require("express");
const router = express.Router();

const SubmissionController = require("../controller/SubmissionController");



router.post("/submit/:uid/:classId", SubmissionController.submitAssignment);
router.get("/get/:uid/:classId", SubmissionController.getSubmissions);
router.get("/getByAssignment/:assignment_id", SubmissionController.getSubmissionsByAssignment);

module.exports = router;