const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
const {addcategory,getcategory}=require('../controller/category')
const multer = require('multer');
const shortid = require('shortid')
const path = require('path');


const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads' ))
    },
    filename:function (req,file ,cb){
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})


 const upload = multer({storage});  

router.post('/catogory/create',requireSignin,sellermiddleware,upload.single('catimg'),addcategory)
router.get('/catogory/getcat',getcategory)

module.exports=router;