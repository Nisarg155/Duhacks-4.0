const mongoose = require('mongoose');

const studentClassSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    codes: { type: [String], default: [] }
}, { timestamps: true });

studentClassSchema.index({ uid: 1 });

const StudentClass = mongoose.model('StudentClass', studentClassSchema);
module.exports = StudentClass;
