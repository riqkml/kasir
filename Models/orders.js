const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Utility/database');

exports.indexOrderBarang = sequelize.define('v_tbarang', {
	id_staff     : {
		type : DataTypes.STRING(25)
	},
	id_order     : {
		type : DataTypes.STRING(25)
	},
	name         : {
		type : DataTypes.STRING(25)
	},
	jenis_barang : {
		type : DataTypes.STRING(35)
	},
	nama_barang  : {
		type : DataTypes.STRING(30)
	},
	harga        : {
		type : DataTypes.INTEGER
	},
	deskripsi    : {
		type : DataTypes.TEXT
	},
	quantity     : {
		type : DataTypes.INTEGER
	},
	sub_total    : {
		type : DataTypes.INTEGER
	},
	discount     : {
		type : DataTypes.INTEGER
	},
	tgl_order    : {
		type : DataTypes.DATE
	},
	invoice      : {
		type : DataTypes.STRING(50)
	}
});

exports.indexOrderPerawatan = sequelize.define('v_tperawatan', {
	id_staff       : {
		type : DataTypes.STRING(25)
	},
	id_order       : {
		type : DataTypes.STRING(25)
	},
	name           : {
		type : DataTypes.STRING(25)
	},
	nama_kucing    : {
		type : DataTypes.STRING(25)
	},
	nama_perawatan : {
		type : DataTypes.STRING(25)
	},
	biaya          : {
		type : DataTypes.INTEGER
	},
	quantity       : {
		type : DataTypes.INTEGER
	},
	sub_total      : {
		type : DataTypes.INTEGER
	},
	discount       : {
		type : DataTypes.INTEGER
	},
	tgl_order      : {
		type : DataTypes.DATE
	},
	invoice        : {
		type : DataTypes.STRING(50)
	}
});

exports.indexOrderPenitipan = sequelize.define('v_tpenitipan', {
	id_staff    : {
		type : DataTypes.STRING(25)
	},
	id_order    : {
		type : DataTypes.STRING(25)
	},
	name        : {
		type : DataTypes.STRING(25)
	},
	nama_kucing : {
		type : DataTypes.STRING(20)
	},
	check_in    : {
		type       : DataTypes.DATE,
		timestamps : false,
		createdAt  : false,
		updatedAt  : false
	},
	check_out   : {
		type       : DataTypes.DATE,
		timestamps : false,
		createdAt  : false,
		updatedAt  : false
	},
	biaya       : {
		type : DataTypes.INTEGER
	},
	quantity    : {
		type : DataTypes.INTEGER
	},
	sub_total   : {
		type : DataTypes.INTEGER
	},
	discount    : {
		type : DataTypes.INTEGER
	},
	tgl_order   : {
		type : DataTypes.DATE
	},
	invoice     : {
		type : DataTypes.STRING(50)
	}
});

exports.indexOrderVaksin = sequelize.define('v_tvaksin', {
	id_staff     : {
		type : DataTypes.STRING(25)
	},
	id_order     : {
		type : DataTypes.STRING(25)
	},
	name         : {
		type : DataTypes.STRING(25)
	},
	nm_vaksin    : {
		type : DataTypes.STRING(60)
	},
	jenis_kucing : {
		type : DataTypes.STRING(25)
	},
	harga        : {
		type : DataTypes.INTEGER
	},
	quantity     : {
		type : DataTypes.INTEGER
	},
	sub_total    : {
		type : DataTypes.INTEGER
	},
	discount     : {
		type : DataTypes.INTEGER
	},
	tgl_order    : {
		type : DataTypes.DATE
	},
	invoice      : {
		type : DataTypes.STRING(50)
	}
});

exports.Pesanan = sequelize.define('orders', {
	id_order  : {
		type       : DataTypes.STRING(25),
		allowNull  : false,
		primaryKey : true
	},
	invoice   : {
		type      : DataTypes.STRING(50),
		allowNull : false
	},
	tgl_order : {
		type      : DataTypes.DATE,
		allowNull : false,
		createdAt : true,
		updatedAt : false
	},
	id_staff  : {
		type      : DataTypes.STRING(25),
		allowNull : false,
		refrences : {
			model : staffs,
			key   : id_staff
		}
	},
	indexes   : [
		{
			unique : false,
			fields : [
				'id_staff'
			]
		}
	]
});

exports.detailPesanan = sequelize.define('order_detail', {
	id_order     : {
		type       : DataTypes.STRING(25),
		allowNull  : false,
		primaryKey : true,
		unique     : true,
		refrences  : {
			model : orders,
			key   : id_order
		}
	},
	sub_total    : {
		type      : DataTypes.INTEGER,
		allowNull : false
	},
	id_barang    : {
		type      : DataTypes.STRING(25),
		allowNull : false,
		refrences : {
			model : barang,
			key   : id_barang
		}
	},
	quantity     : {
		type      : DataTypes.INTEGER,
		allowNull : false
	},
	discount     : {
		type      : DataTypes.INTEGER,
		allowNull : false
	},
	id_penitipan : {
		type      : DataTypes.STRING(25),
		allowNull : false,
		refrences : {
			model : penitipan,
			key   : id_penitipan
		}
	},
	id_perawatan : {
		type      : DataTypes.STRING(25),
		allowNull : false,
		refrences : {
			model : perawatan,
			key   : id_perawatan
		}
	},
	id_vaksin    : {
		type      : DataTypes.STRING(25),
		allowNull : false,
		refrences : {
			model : vaksin,
			key   : id_vaksin
		}
	},
	indexes      : [
		{
			unique : false,
			fields : [
				'id_staff',
				'id_penitipan',
				'id_perawatan',
				'id_vaksin'
			]
		}
	]
});
