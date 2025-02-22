const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    teacher_id: { type: String, required: true, unique: true },
    name: { type: String, required: true }
});

teacherSchema.index({ teacher_id: 1 }, { unique: true });

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
