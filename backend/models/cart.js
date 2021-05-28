const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const cartschema=new schema(
    {
        user: { type:mongoose.Schema.Types.ObjectId, 
             ref:'User',required: true},
        cartItems: [
            {
                product:{ type:mongoose.Schema.Types.ObjectId, ref: 'Product' , required: true},
                quantity: { type:Number,default: 1},
                //price:{ type:mongoose.Schema.Types.ObjectId.price, ref: 'Product',required:true}
                price:{ type: Number,required:true}
            }
        ]
    },{ timestamps:true});


const cart =mongoose.model("Cart",cartschema);
module.exports=cart;