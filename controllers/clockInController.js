const db = require('../models');

module.exports = {
    insertRecord: function(req, res){
        db.ClockIn.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err))
    }
}