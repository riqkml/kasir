const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Utility/database');

exports.Perawatan = sequelize.define('perawatan', {
	id_perawatan   : {
		type       : DataTypes.STRING(15),
		allowNull  : false,
		primaryKey : true
	},
	nama_kucing    : {
		type      : DataTypes.STRING(25),
		allowNull : false
	},
	nama_perawatan : {
		type      : DataTypes.STRING(25),
		allowNull : false
	},
	biaya          : {
		type      : DataTypes.INTEGER,
		allowNull : false
	}
});
