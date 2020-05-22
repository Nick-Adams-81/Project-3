const express = require('express');
const router = express.Router();

// Employee Model
const Employee = require('../../models/Employee');

// @route  GET api/Employees
// @desc   Get All Employees
// @access Public
router.get('/', (req, res) =>{
    Employee.find()
    .sort({date: -1 })
    .then(employees => res.json(employees))
})

// @route  POST api/Employees
// @desc   POST an Employee
// @access Public
router.post('/', (req, res) =>{
    const newEmployee = new Employee({
        name: req.body.name
    });

    newEmployee.save().then(employee => res.json(employee));
});

// @route  Delete api/employees:id
// @desc   Delete an Employee
// @access Public
router.delete('/:id', (req, res) => {
    Employee.findById(req.params.id)
    .then(employee => employee.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
    })

module.exports = router;