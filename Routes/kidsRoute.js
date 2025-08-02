const express = require('express');

const router = express.Router();

const controller = require('../Controllers/kidsController');

router.get('/kidsColl', controller.getKids);

router.get('/kidsColl/:_id',controller.getKidsDetailsById);

module.exports = router;
