const Catogory=require('../models/catogory')
const router=require("express").Router();
const jwt =require('jsonwebtoken');
const slugify=require('slugify');
const catogory = require('../models/catogory');

require('dotenv').config();
//add catogory
function createCatogories(catogories,parentid=null)
{
    const categorylist=[];
    let category;
    //check parentid 
    if(parentid==null){
        category=catogories.filter(cat=>cat.parentid==undefined);
    }
    else{
        category=catogories.filter(cat=>cat.parentid==parentid);
    }
    for(let cate of category)
    {
        categorylist.push(
            {
                _id:cate._id,
                name:cate.name,
                slug:cate.slug,
                parentid:cate.parentid,
                children:createCatogories(catogories,cate._id)
            }
        );
    }
    return categorylist;

}


exports.addcategory=(req,res)=>
{
    console.log("dewww  :"+req.body.name);
    const newcatogory=
    {
       
        name:req.body.name,
        slug:slugify(req.body.name)
    }
    //console.log("dewww1  :"+req.body.name);
    if(req.file){
        newcatogory.catimage = process.env.API+'/public/'+req.file.filename;
        //newcatogory.catimage=catpicUrl;   
    }

    if(req.body.parentid)
    {
        newcatogory.parentid=req.body.parentid;
    }
    console.log("dewww2 "+req.body.name);
    const cat=new Catogory(newcatogory);
    cat.save((error,catogory)=>
    {
        if(error) return res.status(400).json({error});
        if(catogory){
            return res.status(201).json({catogory});
        }
    }),{ writeConcern: { w: "majority" , wtimeout: 5000 } };
}
//get catogory
exports.getcategory=(req,res)=>
{
    Catogory.find({}).exec((error,catogory)=>
    {
        if(error) return res.status(400).json({error});
        if(catogory){
            const categorylist=createCatogories(catogory)
            return res.status(201).json({categorylist});
        }
    });
}
