const Sequelize = require('sequelize');

const db = new Sequelize('kasir', 'root', 'famkerz123', {
	dialect : 'mysql',
	host    : 'localhost'
});

module.exports = db;
