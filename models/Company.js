const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
    employees: [{
        firstName: String,
        lastName: String,
        role: [{
           name: String,
           rate: Number
        }], 
        
    },{

    },{

    }]
        
    

});

module.exports = Company = mongoose.model('Company', CompanySchema);