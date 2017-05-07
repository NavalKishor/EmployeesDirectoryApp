
// Dependencies
var express = require('express');
var router = express.Router();

//Empolyee
var Employee = require('../models/employee');
Employee.methods(['get', 'put', 'post', 'delete']);
Employee.register(router, '/employees');

// Return router
module.exports = router;
