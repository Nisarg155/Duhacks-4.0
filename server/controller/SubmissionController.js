const Submission = require("../modals/Submissions");

exports.submitAssignment = async (req, res) => {
    try {
        const { uid, classId } = req.params;
        const submission = new Submission(req.body);
        await submission.save();
        res.status(200).json(await Submission.find({ class_code: classId, student_id: uid }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSubmissions = async (req, res) => {
    try {
        const { uid, classId } = req.params;
        res.status(200).json(await Submission.find({ class_code: classId, student_id: uid }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSubmissionsByAssignment = async (req, res) => {
    try {
        const { assignment_id } = req.params;
        res.json(await Submission.find({ assignment_id }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}