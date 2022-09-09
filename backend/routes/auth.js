const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authController = require('../controllers/authController');

router.post('/', authController.handleLogin);

router.route('/users')
    .get(usersController.getAllUsers);

module.exports = router;