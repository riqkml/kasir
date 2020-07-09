const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Utility/database');

exports.Vaksin = sequelize.define('vaksin', {
	id_vaksin    : {
		type       : DataTypes.STRING(15),
		allowNull  : false,
		primaryKey : true
	},
	nm_vaksin    : {
		type      : DataTypes.STRING(60),
		allowNull : false
	},
	jenis_kucing : {
		type      : DataTypes.STRING(25),
		allowNull : false
	},
	harga        : {
		type      : DataTypes.INTEGER,
		allowNull : false
	}
});
