const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const usersController = require('../../controllers/api/users');

// These routes are "prefixed" with /api/users
router.post('/', usersController.create);
router.post('/login', usersController.login);

router.get('/check-token', ensureLoggedIn, usersController.checkToken);
module.exports = router;
