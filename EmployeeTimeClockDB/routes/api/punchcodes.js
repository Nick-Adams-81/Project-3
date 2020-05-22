const express = require('express');
const router = express.Router();

// Punchcode Model
const Punchcode = require('../../models/Punchcode');

// @route  GET api/Punchcodes
// @desc   Get All Punchcodes
// @access Public
router.get('/', (req, res) =>{
    Punchcode.find()
    .sort({date: -1 })
    .then(punchcodes => res.json(punchcodes))
})

// @route  POST api/Punchcodes
// @desc   POST an Punchcode
// @access Public
router.post('/', (req, res) =>{
    const newPunchcode = new Punchcode({
        name: req.body.name
    });

    newPunchcode.save().then(punchcode => res.json(punchcode));
});

// @route  Delete api/punchcodes:id
// @desc   Delete an Punchcode
// @access Public
router.delete('/:id', (req, res) => {
    Punchcode.findById(req.params.id)
    .then(punchcode => punchcode.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
    })

module.exports = router;