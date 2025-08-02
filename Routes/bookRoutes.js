const express = require('express');

const router = express.Router();

let controller = require('../Controllers/bookController');

router.get('/book',controller.getAllBooks);

router.get('/book/:_id',controller.getbookById);

router.get('/cityResponse/:city',controller.getbookByCity);

router.get('/bookType/:booktype',controller.getbookByType);


module.exports = router;
