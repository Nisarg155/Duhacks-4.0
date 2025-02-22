const Class = require("../modals/Classes");

const  generateRandomCode = (length) => {
    const SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
    let salt = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * SALTCHARS.length);
        salt += SALTCHARS.charAt(index);
    }
    return salt;
}

exports.createNewClass = async (req, res) => {
    try {
        const { uid, name } = req.params; // Extract teacher ID and name from the URL
        const classData = new Class(req.body);

        classData.teacher_id = uid;
        classData.teacher_name = name;
        console.log(classData)

        let code = generateRandomCode(8);
        while (await Class.findOne({ class_id: code })) {
            code = generateRandomCode(8);
        }

        classData.class_id = code;
        await classData.save();

        // Return all classes that contain the given teacher_id
        const allClasses = await Class.find({ teacher_id: uid });

        res.json(allClasses);
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
        const { classId, uid } = req.params;
        console.log(classId);

        // Delete the class by code
        const deletedClass = await Class.findOneAndDelete({ class_id: classId });
        if (!deletedClass) {
            return res.status(404).json({ message: "Class not found" });
        }

        // Find all classes by teacher ID
        const classesByTeacher = await Class.find({ teacher_id: uid });

        // Return the remaining classes
        res.json(classesByTeacher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

