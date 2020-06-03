const express = require('express');
const router = express.Router();

// company Model
const company = require('../../models/company');

// @route  GET api/Company
// @desc   Get All Company
// @access Public
router.get('/', (req, res) =>{
    company.find()
    .sort({date: -1 })
    .then(Company => res.json(Company))
})

// @route  POST api/Company
// @desc   POST an company
// @access Public
router.post('/', (req, res) =>{
    const newcompany = new company({
        name: req.body.name
    });

    newcompany.save().then(company => res.json(company));
});

// @route  Delete api/Company:id
// @desc   Delete an company
// @access Public
router.delete('/:id', (req, res) => {
    company.findById(req.params.id)
    .then(company => company.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
    })

module.exports = router;