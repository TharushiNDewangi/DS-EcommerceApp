const express = require('express');
const { requireSignin,usermiddleware } = require('../middleware/index')
const {addorder } = require('../controller/order');
const router = express.Router();


router.post('/user/addorder',requireSignin, usermiddleware,addorder);
//router.get('/user/getorder',requireSignin,usermiddleware,getAddress);


module.exports = router;