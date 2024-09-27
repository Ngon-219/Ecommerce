const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.get('/get-user', userController.getUser);

router.post('/user', userController.postUser);

module.exports = router;