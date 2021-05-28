const mongoose = require('mongoose');
const schema =mongoose.Schema;
const orderschema=new schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
           // required:true
            
        },
        addressId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"UserAddress.address",
           // required:true,
            
        },
       Amout:{
            type:Number,
           // required: true,
        },
        items:[
            {
                Productid:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Product"
                },
                payablePrice:{
                    type:Number,
                   // required:true,
                },
                purchasedQty:{
                    type:Number,
                  //  required:true,
                }
            }
        ],
        pstatus:{
            type: String,
            enum:["pending","cancel","complete","refund"],
           // required:true,
        },
        paymentType:{
            type:String,
            enum:["cod","card"],
           // required:true,
        },
        orderstatus:[
            {
            type:{
                type:String,
                enum:["ordered","packed","shipped","delivered"],
                default:true,
            },
            date:{
                type:Date,
            },
            isCompleted:{
                type:Boolean,
                default:false,
            },
            
        },
        ],
    },
        
       { timestamps: true});


const order =mongoose.model("Order",orderschema);
module.exports=order;
//module.exports=