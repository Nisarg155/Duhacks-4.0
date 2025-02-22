const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    urls: { type: [String] },
    file_names: { type: [String] },
    class_id: { type: String, required: true, index: true },
    code: { type: String, unique: true }
},{ timestamps: true });



const Material = mongoose.model('Material', materialSchema);
module.exports = Material;
