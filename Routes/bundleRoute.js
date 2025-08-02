const express = require('express');

const router = express.Router();

const { getBundle, getBundleDetById } = require('../Controllers/bundleController');

router.get('/bundleColl', getBundle);
router.get("/bundleColl/:_id", getBundleDetById);


module.exports = router;
