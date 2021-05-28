const UserAddress =require('../models/address');
//add address
exports.addAddress=(req,res)=>{
    const{payload}=req.body;
    if(payload.address){
        UserAddress.findOneAndUpdate({user:req.user._id},{
            "$push": {
                    "address": payload.address
                }
            
        },{new:true,upsert:true})
        .exec((error,address)=>
        {
                if(error) return res.status(400).json({error});
                if(address){
                    res.status(201).json({ address });
                }
            
        });
    }else{
res.status(400).json({error:'param address requirest'});
    }
    
}
//get addres details
exports.getAddress = (req, res) => {

    console.log('hey')
        //res.status(200).json({file: req.files , body:req.body});
        const { productid }=req.params;
       UserAddress.findOne({user:req.user._id})
       .exec((error, useraddress) => {
        if(error)
            return res.status(400).json({ error});
        if(useraddress){
            res.status(200).json({useraddress});
            console.log(useraddress);
        }
    });
        
    }