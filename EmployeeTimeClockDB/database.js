const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema_name_here_Schema = new Schema({
    employee:{
        lastName: '',
        firstName: '',

    }
})

const Something_ = mongoose.model("Workout", workoutSchema)

module.exports = Something_;