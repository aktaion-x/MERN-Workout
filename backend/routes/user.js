const router = require('express').Router();
const { loginUser, signupUser } = require('../controllers/userController.js');
console.log();

router.post('/login', loginUser);

router.post('/signup', signupUser);

module.exports = router;