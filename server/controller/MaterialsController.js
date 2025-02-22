const Material = require("../modals/Materials");

exports.uploadMaterial = async (req, res) => {
    try {
        const { code, title, description, urls, file_names } = req.body;
        const material = new Material({ title, description, urls, file_names, class_code: code });
        await material.save();
        res.json(await Material.find({ class_code: code }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMaterials = async (req, res) => {
    try {
        const { code } = req.params;
        res.json(await Material.find({ class_code: code }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMaterial = async (req, res) => {
    try {
        const { class_code, material_code } = req.params;
        await Material.findOneAndDelete({ uniqueCode: material_code });
        res.json(await Material.find({ class_code }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
