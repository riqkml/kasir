const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Utility/database');

exports.indexProducts = sequelize.define('v_barang', {
	id_barang    : {
		type : DataTypes.STRING(25)
	},
	jenis_barang : {
		type : DataTypes.STRING(35)
	},
	nama_barang  : {
		type : DataTypes.STRING(30)
	},
	quantity     : {
		type : DataTypes.INTEGER
	},
	harga        : {
		type : DataTypes.INTEGER
	},
	photo        : {
		type : DataTypes.STRING(255)
	},
	deskripsi    : {
		type : DataTypes.TEXT
	}
});

exports.typeProduct = sequelize.define('jenis_barang', {
	id_jenis_barang : {
		type       : DataTypes.STRING(25),
		allowNull  : false,
		primaryKey : true
	},
	jenis_barang    : {
		type      : DataTypes.STRING(35),
		allowNull : false
	}
});

exports.Products = sequelize.define('barang', {
	id_barang       : {
		type       : DataTypes.STRING(25),
		allowNull  : false,
		primaryKey : true
	},
	id_jenis_barang : {
		type      : DataTypes.STRING(25),
		allowNull : false,
		refrences : {
			model : jenis_barang,
			key   : id_jenis_barang
		}
	},
	nama_barang     : {
		type      : DataTypes.STRING(30),
		allowNull : false
	},
	harga           : {
		type      : DataTypes.INTEGER,
		allowNull : false
	},
	photo           : {
		type      : DataTypes.STRING(255),
		allowNull : false
	},
	deskripsi       : {
		type      : DataTypes.TEXT,
		allowNull : false
	},
	indexes         : [
		{
			unique : false,
			fields : [
				'id_jenis_barang'
			]
		}
	]
});

exports.Stok = sequelize.define('stock', {
	id_barang : {
		type      : DataTypes.STRING(25),
		allowNull : false,
		refrences : {
			model : barang,
			key   : id_barang
		}
	},
	quantity  : {
		type      : DataTypes.INTEGER,
		allowNull : false
	}
});
