const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
