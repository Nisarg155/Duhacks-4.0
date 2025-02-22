const Teacher = require("../modals/Teacher");
const Class = require("../modals/Classes");

exports.createNewTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.json(teacher.teacher_id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


