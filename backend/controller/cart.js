const Cart = require('../models/cart');
exports.additemtocart = (req, res) => {
    Cart.findOne({ user: req.user._id })
        .exec((error, cart) => {
            if (error) return res.status(400).json({ error });
            if (cart) {
               
               const product = req.body.cartItems.product;
                
                const item = cart.cartItems.find(c => c.product == product);
                   //item already exsistda blnw
                if (item) {
                    Cart.findOneAndUpdate({ user: req.user._id, "cartItems.product": product },
                        {
                            "$set": {
                                //mulu cart ekam update karana ek nawaththala ona ek update krnna .$ use kra
                                //not update entire cart and update selected cart
                                "cartItems.$": {
                                    ...req.body.cartItems,
                                    quantity: item.quantity + req.body.cartItems.quantity
                                }
                            }

                        })
                        .exec((error, _cart) => {
                            if (error) return res.status(400).json({ error });
                            if (_cart) {
                                return res.status(201).json({ _cart });
                             }

                        })

                 } else {
                    //user id same nam ekama ekakata ynne
                    //if same user id use go same 
                    Cart.findOneAndUpdate({ user: req.user._id }, {
                        "$push": {
                            "cartItems": req.body.cartItems
                        }

                    })
                        .exec((error, _cart) => {
                            if (error) return res.status(400).json({ error });
                            if (_cart) {
                                return res.status(201).json({ _cart });
                            }
                        })

               }

               // res.status(200).json({ message:cart })
            } else {
                //if cart not exist then creat new cart
                const cart = new Cart({
                    user: req.user._id,
                    //price:req.product.price,
                    cartItems: [req.body.cartItems]

                });
                cart.save((error, cart) => {
                    if (error) return res.status(400).json({ error });
                    if (cart) { 
                        return res.status(201).json({ cart }).catch((error)=>{
                            console.log(error);
                        })
                    }
                    
                
                });

            }

        });

};