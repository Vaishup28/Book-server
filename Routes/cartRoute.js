const express = require('express');

const router = express.Router();

const controller = require('../Controllers/cartController');

router.post('/save', controller.saveCart);

module.exports = router; 