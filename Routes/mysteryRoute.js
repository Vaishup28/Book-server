const express = require('express');
const router = express.Router();
const controller = require('../Controllers/mysteryController');

router.get('/Mys/:_id', controller.getMysteryById);

module.exports = router;
