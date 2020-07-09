const User = require('../Models/user');
const bcrypt = require('bcryptjs');

exports.postAdd = (req, res, next) => {
	const userData = {
		id_staff : req.body.id_staff,
		username : req.body.username,
		password : req.body.password,
		level    : req.body.level,
		name     : req.body.nama,
		email    : req.body.email
	};

	User.findOne({ where: { username: username } }).then((userDoc) => {
		if (!userDoc) {
			const hash = bcrypt.hashSync(userData.password, 12);
			userData.password = hash;
			User.create(userData);
		}
	});
};
