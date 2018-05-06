var Employees = require('../models/index').Employees;


module.exports = {

    getEmployeesById: function (req, res) {
        Employees.find({
            where: {emp_no: req.body.id},
        }).then((employee) => {
            console.log(employee.dataValues);
            res.send({employee:employee.dataValues});
        }).catch((err) => {
            console.log(err);
        });
    },

    getEmployeesByFirstAndLastName: function (req, res) {
        Employees.findAll({
            where: {first_name: req.body.firstName, last_name: req.body.lastName}
        }).then((employee) => {
            res.send({employee:employee.dataValues});
            employee.forEach((e) => {
                console.log(e.dataValues);
            })
        }).catch((err) => {
            console.log(err);
        })

    },

    getEmployeesByFirstName: function (req, res) {
        Employees.findAll({
            where: {first_name: req.body.firstName}
        }).then((employee) => {
            res.send({employee:employee.dataValues});
            employee.forEach((e) => {
                console.log(e.dataValues);
            });
        }).catch((err) => {
            console.log(err);
        })
    },

    getEmployeesByLastName: function (req, res) {
        Employees.findAll({
            where: {last_name: req.body.lastName}
        }).then((employee) => {
            res.send({employee:employee.dataValues});
            employee.forEach((e) => {
                console.log(e.dataValues);
            });
        }).catch((err) => {
            console.log(err);
        })
    },

    getEmployeesByGender: function (req, res) {
        Employees.findAll({
            where: {gender: req.body.gender,}
        }).then((employee) => {
            res.send({employee:employee.dataValues});
            employee.forEach((e) => {
                console.log(e.dataValues);
            });
        }).catch((err) => {
            console.log(err);
        })
    }
}