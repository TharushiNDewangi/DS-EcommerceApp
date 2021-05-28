//const router = express.Router();
const Product = require('../models/product');
const shortid = require('shortid')
const slugify = require('slugify')
const Catogory = require('../models/catogory');
const Order = require('../models/order');

//add order
exports.addorder = (req,res)=>
{
  console.log(req.body);

  
  const order=new Order(req.body);
  order.save((error, order) =>
  {
    if(error) return res.status(400).json({ error });
    if(order)
    res.status(201).json({ order });
    
  })
}
  // res.status(200).json({file: req.files , body:req.body});



  
  