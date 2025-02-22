const Assignment = require("../modals/Assignment");
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


exports.addAssignment = async (req, res) => {

    let code = generateRandomCode(16);
    while (await Assignment.findOne({ unique_code: code })) {
        code = generateRandomCode(16);
    }
    try {
        const { class_code } = req.params;
        const { title, description, lastdate, latesub } = req.body;
        const assignment = new Assignment({ title, description, lastdate, latesub, class_code , unique_code:code });
        await assignment.save();
        res.json(await Assignment.find({ class_code }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAssignments = async (req, res) => {
    try {
        const { code } = req.params;
        res.json(await Assignment.find({ class_code: code }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
