const mongoose = require("mongoose");

const SubmissionTypeSchema = new mongoose.Schema({
    submissionFormat: { 
        type: String, 
        required: true 
    },
    deadline:{
        type:String, 
        required: true
    },
    specialMessage: { 
        type: String, 
        required: true 
    },
    
})

const SubmissionType = mongoose.model('SubmissionType', SubmissionTypeSchema);
module.exports = SubmissionType;