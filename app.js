//Import
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./Utility/database');
const routeLogin = require('./Routes/login');
const routeAdmin = require('./Routes/admin');
const session = require('express-session');
const csrf = require('csurf');
const flash = require('connect-flash');
//End

const app = express();
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'Views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Public')));
app.use(
	session({
		secret            : 'My Shop',
		resave            : false,
		saveUninitialized : false
	})
);

// app.use(csrfProtection);
// app.use(flash());

app.use(routeLogin);

//app.use(routeAdmin);

app.listen(4000);
