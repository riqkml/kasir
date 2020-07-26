//Import
const express = require('express');
const login = require('../Controllers/loginC');
//End

const router = express.Router();

router.get('/', login.loginPage);

router.post('/', login.loginPost);

module.exports = router;