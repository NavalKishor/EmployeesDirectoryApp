
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: Date,
    dep:String,
    gender:String,
    age: Number
});

// Return model
module.exports = restful.model('Employees', employeeSchema);
