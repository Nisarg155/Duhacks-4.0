const Class = require("../modals/Classes");
const StudentClass = require("../modals/Student_Class")

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



exports.verifyCode = async (req, res) => {
    try {
        const classExists = await Class.findOne({ class_id: req.params.code }).exec();

        if (!classExists) {
            return res.json(false); // Class not found, return false
        } else {
            return res.status(200).json(true); // Class found, return true
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.joinClass = async (req, res) => {
    try {
        const { uid, code, name } = req.params;

        // Check if class exists
        const classData = await Class.findOne({ class_id: code });
        if (!classData) {
            return res.status(404).json({ error: "Class not found" });
        }

        // Ensure student is not already in the class
        if (!classData.student_ids.includes(uid)) {
            classData.student_ids.push(uid);
            classData.student_names.push(name);
            await classData.save();
        } else {
            return res.status(400).json({ error: "Student already in class" });
        }

        // Check if student class record exists
        let studentClass = await StudentClass.findOne({ uid: uid });
        if (studentClass) {
            if (!studentClass.codes.includes(code)) {
                studentClass.codes.push(code);
                await studentClass.save();
            } else {
                return res.status(400).json({ error: "Class already joined" });
            }
        } else {
            studentClass = new StudentClass({ uid, codes: [code] });
            await studentClass.save();
        }

        // Fetch all joined classes
        const studentClasses = await Class.find({ class_id: { $in: studentClass.codes } });

        res.json(studentClasses);
    } catch (error) {
        console.error("Error in joinClass:", error);
        res.status(500).json({ error: error.message });
    }
};


exports.getStudentClasses = async (req, res) => {
    try {
        const { uid } = req.params;
        const studentClass = await StudentClass.findOne({uid:uid});
        if (!studentClass) return res.json([]);

        const classes = await Promise.all(studentClass.codes.map(code => Class.findOne({class_id: code})));
        res.json(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

