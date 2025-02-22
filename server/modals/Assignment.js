const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    lastdate: {
        type: String, // Consider using Date type if handling real dates
        required: true,
        index: true
    },
    latesubmission: {
        type: Boolean,
        default: false
    },
    unique_code: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    class_code: {
        type: String,
        required: true,
        index: true
    }
}, { timestamps: true });

const Assignment = mongoose.model('Assignment', AssignmentSchema);

module.exports = Assignment;
