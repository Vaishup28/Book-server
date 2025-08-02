const express = require('express');

const router = express.Router();

const controller = require('../Controllers/monsoonController');

router.get('/monColl', controller.getMonsoon);

router.get('/monColl/:_id', controller.getMonsoonDettailsById);

module.exports = router;
