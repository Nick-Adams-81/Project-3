const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClockInSchema = new Schema({
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    }

});

module.exports = ClockIn = mongoose.model('clockin', ClockInSchema);