const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    class_code: { type: String, required: true, index: true },
    assignment_id: { type: String, required: true, index: true },
    file_names: { type: [String], default: [] },
    urls: { type: [String], default: [] },
    sub_date: { type: Date, required: true },
    student_id: { type: String, required: true, index: true },
    student_name: { type: String, required: true }
}, { timestamps: true });

// Creating indexes for optimized queries
submissionSchema.index({ student_id: 1, assignment_id: 1 });
submissionSchema.index({ class_code: 1, assignment_id: 1 });

const Submission = mongoose.model('Submission', submissionSchema);
module.exports = Submission;
