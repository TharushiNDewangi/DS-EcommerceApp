//const router = express.Router();
const Product = require('../models/product');
const shortid = require('shortid')
const slugify = require('slugify')
const Catogory = require('../models/catogory');
const product = require('../models/product');

//create product
exports.createproduct = (req, res) => {

    // res.status(200).json({file: req.files , body:req.body});
    const {
        name, price, description, category, quantity, createBy
    } = req.body;
    let productPictures = [];

    if (req.files.length > 0) {
        productPictures = req.files.map(file => {
            return { img: file.filename }
        });
    }


    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createBy: req.user._id
    });

    product.save(((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
            res.status(201).json({ product });
        }
    }));
    //hhh
};
//get product by it's slug
exports.getprostdbyslug = (req, res) => {
    const { slug } = req.params;
    Catogory.findOne({ slug: slug })
        .select('_id')
        .exec((error, category) => {
            if (error) {
                return res.status(400).json({ error });
            }
            if (category) {
                Product.find({ category: category._id })
                    .exec((error, products) => {
//set price range
                        return res.status(200).json({
                            products,
                            priceRange: {
                              lessRs5000: 5000,
                              lessRs15000: 15000

                            },
                            productsByPrice:{
                                lessRs5000:products.filter(product =>product.price <= 5000),
                                lessRs15000:products.filter(product =>product.price <= 4999 && product.price <= 15000),
                            }
                        });
                    })

            }

            //return res.status(400).json({category})
        });
    // res.status(200).json({slug});

}
//get product by id
exports.getproductsbyId = (req, res) => {

    console.log('hey')
    //res.status(200).json({file: req.files , body:req.body});
    const { productid } = req.params;
    console.log("pro id", productid)
    if (productid) {
        Product.findOne({ _id: productid })
            .exec((error, product) => {
                console.log('error');
                if (error)
                    return res.status(400).json({ error });
                console.log(error)
                if (product) {
                    res.status(200).json({ product });
                    console.log(product);
                }
            });

    } else {
        return res.status(400).json({ error: 'params required' });
    }
};


exports.deleteProduct = (req, res) => {
    const { productid } = req.body.payload;
    if (productid) {

        Product.deleteOne({ _id: productid }).exec((error, product) => {
            if (error)
                return res.status(400).json({ error });
            console.log(error)
            if (product) {
                res.status(200).json({ product });
                console.log(product);
            }
        });

    } else {
        return res.status(400).json({ error: 'params required' });
    }
};
exports.editproduct = async (req, res) => {
    const { productid } = req.params;
    if (productid) {
        const { _id, name, price, quatity, description, offer } = req.body;
        const updatedproduct = {
            name, price, quatity, description, offer
        }
        await Product.findByIdAndUpdate(productid, updatedproduct, { new: true });
        res.json(updatedproduct);

    }

}