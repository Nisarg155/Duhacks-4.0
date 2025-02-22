const Class = require("../modals/Classes");

exports.createNewClass = async (req, res) => {
    try {
        const classData = new Class(req.body);
        await classData.save();
        res.json(classData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find({ teacher_id: req.params.uid });
        res.json(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteClass = async (req, res) => {
    try {
        const deletedClass = await Class.findOneAndDelete({ class_id: req.params.classId });
        if (!deletedClass) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.json({ message: "Class deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

