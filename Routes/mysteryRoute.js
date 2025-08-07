const express = require('express');
const router = express.Router();
const { getMysteryById } = require('../Controllers/mysteryController');

router.get('/Mys/:_id', getMysteryById);

module.exports = router;














