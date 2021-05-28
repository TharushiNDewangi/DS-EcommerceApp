const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const productschema=new schema(
    {
        name: {
            type: String,
            required:true,
            trim:true
        },
        slug:{
            type: String,
            required:true,
            unique:true
        },
        price:{
            type:Number,
            required: true
        },
        quantity:{
            type: Number,
            required:true
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        offer:{ type:Number},
        
        productPictures:[
            { img: {type: String}}
        ],
        reviews:[
            {
                userId:{type :mongoose.Schema.Types.ObjectId, ref: 'User'},
                review: String
            }
        ],
        category:{type:mongoose.Schema.Types.ObjectId,ref :'Catogory' , required:true},
        createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true },
        updatedAt:Date,
        
        },{ timestamps: true})


const product =mongoose.model("Product",productschema);
module.exports=product;
//module.exports=