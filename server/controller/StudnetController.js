const Student = require("../modals/Student");

exports.createNewStudent = async (req, res) => {
    try {
        console.log(req.body);
        const student = new Student(req.body);
        await student.save();
        res.json(student.student_id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
