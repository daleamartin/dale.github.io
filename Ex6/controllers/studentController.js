const Student = require('../models/studentModel');

exports.saveStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.json({ inserted: true });
    } catch (error) {
        res.json({ inserted: false });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        await Student.updateOne({ fname: "Mary Jane" }, { lname: "Parker" });
        res.json({ updated: true });
    } catch (error) {
        res.json({ updated: false });
    }
};

exports.removeUser = async (req, res) => {
    try {
        await Student.deleteOne({ stdnum: req.body.stdnum });
        res.json({ deleted: true });
    } catch (error) {
        res.json({ deleted: false });
    }
};

exports.removeAllUsers = async (req, res) => {
    try {
        const result = await Student.deleteMany();
        if (result.deletedCount > 0) {
            res.json({ deleted: true });
        } else {
            res.json({ deleted: false });
        }
    } catch (error) {
        res.json({ deleted: false });
    }
};

exports.getUserByUsername = async (req, res) => {
    try {
        const users = await Student.find({ stdnum: req.query.stdnum });
        res.json(users);
    } catch (error) {
        res.json([]);
    }
};

exports.getAllMembers = async (req, res) => {
    try {
        const members = await Student.find();
        res.json(members);
    } catch (error) {
        res.json([]);
    }
};
