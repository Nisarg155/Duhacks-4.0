const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_id: { type: String, required: true, unique: true },
    name: { type: String, required: true }
});

studentSchema.index({ student_id: 1 }, { unique: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
