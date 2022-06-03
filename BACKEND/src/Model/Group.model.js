const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    GroupId: {
        type: String,
      required:true  
    },
    Members: {
        type: Array,
        required:true
    },
    RegNo: {
        type: Array,
        required:true
    },
    year: {
        type: String,
        required:true
    }
    
})

const group = mongoose.model("group", groupSchema);
module.exports = group;