const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Utility/database');

const User = sequelize.define(
	'staffs',
	{
		id_staff : {
			type       : Sequelize.STRING(25),
			allowNull  : false,
			primaryKey : true
		},
		username : {
			type      : Sequelize.STRING(30),
			allowNull : false
		},
		password : {
			type      : Sequelize.STRING(80),
			allowNull : false
		},
		level    : {
			type      : Sequelize.ENUM('Admin', 'Kasir'),
			allowNull : false
		},
		name     : {
			type      : Sequelize.STRING(25),
			allowNull : false
		},
		email    : {
			type      : Sequelize.STRING(25),
			allowNull : false
		}
	},
	{
		timestamps : false,
		createdAt  : false,
		updatedAt  : false
	}
);

module.exports = User;
