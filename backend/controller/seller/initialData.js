const router=require("express").Router();
const Category=require('../../models/catogory')
const Product=require('../../models/product')

//create category
function createCatogories(catogories,parentid=null)
{
    const categorylist=[];
    let category;
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

exports.initialData=async(req,res)=>
{
//apita ona dewal tabal ekn select karala gnna pluwn mehema 
//function chaning
    const categories=await Category.find({}).exec();
    const products=await Product.find({})
    .select('_id name price slug quantity description productPictures category ')
    .populate({path:'category',select:'_id name'})
    .exec();
    res.status(200).json({
        categories:createCatogories(categories),
        products
    });

}