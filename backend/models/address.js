const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const addresschema=new schema(
    {
        name: {
            type: String,
            required:true,
            trim:true,
            min:3,
            max:50
        },
        mobilenumber:{
            type: String,
            required:true,
            trim:true
        },
        pincode:{
            type: String,
            required:true,
            trim:true
        },
        locality:{
            type: String,
            required:true,
            trim:true,
            min:10,
            max:100
        },
        address:{
            type: String,
            required:true,
            trim:true,
            min:10,
            max:100
        },
        city:{
            type:String,
            required:true,
            trim:true
        },
        state:{
            type:String,
            required:true,
            trim:true
        },
        landmark:{
            type: String,
            min:10,
            max:100
        },
        alternatephone:{ type:String},
        addresstype:{
            type: String,
            required:true,
            trim:true,
           enum:['home','work']
        }
        
        
        });
 const useraddresschema=new mongoose.Schema(
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    required:true,
                    ref:'User'
                },
                address:[addresschema]
               
                
                },{ timestamps: true})

mongoose.model("Address",addresschema)
const useraddresss =mongoose.model("UserAddress",useraddresschema);
module.exports=useraddresss;