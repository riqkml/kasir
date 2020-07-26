const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Utility/database');

exports.Penitipan = sequelize.define('penitipan', {
	id_penitipan : {
		type       : DataTypes.STRING(15),
		allowNull  : false,
		primaryKey : true
	},
	nama_kucing  : {
		type      : DataTypes.STRING(20),
		allowNull : false
	},
	check_in     : {
		type       : DataTypes.DATE,
		allowNull  : false,
		timestamps : true,
		createdAt  : true,
		updatedAt  : false
	},
	check_out    : {
		type       : DataTypes.DATE,
		allowNull  : false,
		timestamps : true,
		createdAt  : true,
		updatedAt  : false
	},
	biaya        : {
		type      : DataTypes.INTEGER,
		allowNull : false
	}
});
