const express = require('express');
const { requireSignin,usermiddleware } = require('../middleware/index')
const {addAddress,getAddress } = require('../controller/address');
const router = express.Router();


router.post('/user/address/create',requireSignin,usermiddleware,addAddress);
router.get('/user/getaddress',requireSignin,usermiddleware,getAddress);


module.exports = router;