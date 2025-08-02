const express = require('express');
const router = express.Router();
const { loginUser } = require('../Controllers/authController'); 
const { signupUser} = require('../Controllers/authController');

router.post('/login', loginUser);

router.post('/signup', signupUser);


module.exports = router;
