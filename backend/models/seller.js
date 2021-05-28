const mongoose = require('mongoose');
const schema =mongoose.Schema;
const sellerschema=new schema(
    {
        name: {
            type:String,
            required:true
        },
        address: {
            type:String,
            required:true
        },
        age: {
            type:Number,
            required:true
        }
    }
)
const seller =mongoose.model("Seller",sellerschema);
module.exports=seller;