const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClockInSchema = new Schema({
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    }
});

const ClockIn = mongoose.model("ClockIn", ClockInSchema);

module.exports = ClockIn;