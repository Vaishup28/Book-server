const express = require('express');

const router = express.Router();

const controller = require('../Controllers/candleController');

router.get('/candleColl', controller.getCandle);

router.get('/candleColl/:_id',controller.getCandleDetailsById)

module.exports = router;
