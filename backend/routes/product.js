const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
const {addcategory,getcategory}=require('../controller/category') 
const { createproduct ,getprostdbyslug,getproductsbyId,deleteProduct,editproduct} = require('../controller/product');
//const Product = require('../models/product');
const multer = require('multer');
//const upload=multer({dest:'uploads/'})

const shortid = require('shortid')
const path = require('path');
//const Product = require('../models/product');

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads' ))
    },
    filename:function (req,file ,cb){
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})


 const upload = multer({storage});  

router.post('/product/create',requireSignin,sellermiddleware,upload.array('productpicture'),createproduct);
router.get('/product/:slug',getprostdbyslug);
router.get('/products/:productid',getproductsbyId);
router.delete('/product/delete/:productid',deleteProduct);
router.delete('/products/update/:productid',editproduct);
// router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPicture'),createProduct);

 module.exports = router;  