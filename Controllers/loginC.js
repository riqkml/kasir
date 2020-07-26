const staff = require('../Models/user');

exports.loginPage = (req, res, next) => {
	res.render('login', {
		pageTitle : 'Sign in'
	});
};

exports.loginPost = (req, res, next) => {
	const username = req.body.username;
	const pass = req.body.password;

	staff
		.findOne({ where: { username: username } })
		.then((users) => {
			if (!users) {
				console.log('Error', 'Invalid email or password');
				return res.redirect('index');
			}
			req.session.isLoggedIn = true;
			//req.session.user = user;
			if (users.level === 'Admin') {
				return req.session.save((err) => {
					console.log(err);
					res.redirect('Admin/dashboard');
				});
			} else if (users.level == 'Kasir') {
				return req.session.save((err) => {
					console.log(err);
					res.redirect('Kasir/dashboard');
				});
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
