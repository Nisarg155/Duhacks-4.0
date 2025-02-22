const Material = require("../modals/Materials");

const  generateRandomCode = (length) => {
    const SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
    let salt = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * SALTCHARS.length);
        salt += SALTCHARS.charAt(index);
    }
    return salt;
}


exports.uploadMaterial = async (req, res) => {
    try {
        const code = generateRandomCode(16);
        const {  title, description, urls, file_names, class_id } = req.body;
        const material = new Material({ class_id , title, description, urls, file_names,  code });
        await material.save();
        res.json(await Material.find({ class_id: class_id }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMaterials = async (req, res) => {
    try {
        const { code } = req.params;
        res.json(await Material.find({ class_id: code }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMaterial = async (req, res) => {
    try {
        const { class_code, material_code } = req.params;
        await Material.findOneAndDelete({ code: material_code });
        res.json(await Material.find({ class_id:class_code }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
