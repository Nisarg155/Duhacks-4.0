const mongoose = require('mongoose');

const studentClassSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    codes: { type: [String], default: [] }
}, { timestamps: true });

studentClassSchema.index({ id: 1 });
studentClassSchema.index({ codes: 1 });

const StudentClass = mongoose.model('StudentClass', studentClassSchema);
module.exports = StudentClass;
