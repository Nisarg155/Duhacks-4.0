const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    class_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    teacher_id: { type: String, required: true, index: true },
    teacher_name: { type: String },
    student_ids: { type: [String], index: true },
    student_names: { type: [String] }
});

// // Apply an index to improve queries
// classSchema.index({ teacher_id: 1 });
// classSchema.index({ student_ids: 1 });

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
