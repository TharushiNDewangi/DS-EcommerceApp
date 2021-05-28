const express = require('express');
const {additemtocart } = require('../controller/cart');
const { requireSignin,usermiddleware } = require('../middleware/index')
const router = express.Router();


router.post('/user/cart/addtocart', requireSignin, usermiddleware, additemtocart);


module.exports = router;