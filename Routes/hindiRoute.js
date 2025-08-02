const express = require('express');

const router = express.Router();

const controller = require('../Controllers/hindi-coll');

router.get('/coll', controller.getHindiColl);

router.get('/coll/:_id',controller.getHinDetailsById);

module.exports = router;
