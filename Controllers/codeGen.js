//Import
const { Sequelize, DataTypes } = require('sequelize');
const staff = require('../Models/user');

exports.userCode = (req, res, next) => {
    const code = Sequelize.query('SELECT RIGHT(staffs.id_staff,3) ORDER BY id_staff desc');
    const all = staff.findAll();

    if (all.length > 0) {
        
    }
}