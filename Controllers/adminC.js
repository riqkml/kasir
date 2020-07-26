const akun = require('../Models/user');

exports.getUserPage = (req, res, next) => {
	akun.findAll().then((staffs) => {
		res.render('Account/akun.ejs', {
			accounts  : staffs,
			pageTitle : 'Akun',
			path      : '/akun'
		});
	});
};

exports.indexMenuAcc = (req, res, next) => {
	akun
		.findAll({
			where : {
				jenis_barang : 'Acc Kucing'
			}
		})
		.then((v_barang) => {
			res.render('Menu/menu-aksesoris', {
				aksesoris
			});
		});
};
