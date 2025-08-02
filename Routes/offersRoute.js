const express = require('express');

const router = express.Router();

const controller = require('../Controllers/offersController');

router.get('/off', controller.getOffers);

router.get('/off/:_id', controller.getOfferDetailsById);
module.exports = router;
