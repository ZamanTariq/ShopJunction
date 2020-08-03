const router = require('express').Router();
const newUser = require('../models/newUser.model');
const DeliverdOrder = require('../models/deliverdOrder')
const mongoose  = require('mongoose')
require("dotenv").config();
const nodemailer = require("nodemailer");

router.post('/', async (req, res) =>{
    const userId = await newUser.findById(req.body.userId);
    if (!userId) return res.status(400).send("Invalid user.");
	let order = new DeliverdOrder({
    userId: req.body.userId,
    productId:req.body.productId,
    merchantId:req.body.merchantId,
		userEmail:req.body.userEmail,
		title: req.body.title,
		image: req.body.image,
		category: req.body.category,
		price: req.body.price,
		company: req.body.company,
		info: req.body.info,
		inCart: req.body.inCart,
		count: req.body.count,
        total: req.body.total,
		quantity:req.body.quantity,
		totalPrice:req.body.totalPrice,
		shopAddress:req.body.shopAddress,
    userAddress:req.body.userAddress,
    userName:req.body.userName,
    userPhone:req.body.userPhone
	});
	order
		.save()
		.then((order) => {
			res.status(200).json({ business: 'Add to order successfully' });
			let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.EMAIL,
                  pass: process.env.PASSWORD
                }
              });
              
            let mailOptions = {
                from: "shopinnsite@gmail.com",
                to:` <${req.body.userEmail}>`,
                subject: "Sucessfully Order Delivery",
                text: "Thank you!  We are welcome you have choose our shop for shoping our eys are waiting for your next visit "
              };
              transporter.sendMail(mailOptions, function(err, data) {
                if (err) {
                  console.log("Error occurs", err);
                } else {
                  console.log("Email sent!!!");
                }
              });
		})
		.catch((err) => {
			res.status(400).send('unable to save to database');
		});
});

//Show merchants their orders
router.get('/merchant/:merchantId', async (req, res) => {
    const orders = await DeliverdOrder.find({merchantId:req.params.merchantId}).sort('quantity');
    res.send(orders);
  });
  //Show user their pending orders
router.get('/user/:userId', async (req, res) => {
    const orders = await DeliverdOrder.find({userId:req.params.userId}).sort('date');
    res.send(orders);
}); 

router.route("/totalbycategory").get(function(req,res){
  var u1 = new mongoose.Types.ObjectId("5e8ccd00b33391de9290e2da");
  var u2 = new mongoose.Types.ObjectId("5ec385328abe15508c19b2e2");
  var u3 = new mongoose.Types.ObjectId("5ea95e221c4c2824ccd3864a");
  DeliverdOrder.aggregate([
    {
      $match: { "merchantId": {
        $in: [u1,u2,u3]
    } }
  },
    { $group:
    { _id : '$category', sum : { $sum: "$totalPrice" } , count:{$sum:"$quantity"}}
  }],function(err, result){
    if(err){
      console.log(err);
    }
    else {
      if(result.length>0){
        res.json(result);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})


router.route("/total").get(function(req,res){
  var u1 = new mongoose.Types.ObjectId("5e8ccd00b33391de9290e2da");
  var u2 = new mongoose.Types.ObjectId("5ec385328abe15508c19b2e2");
  var u3 = new mongoose.Types.ObjectId("5ea95e221c4c2824ccd3864a");
  DeliverdOrder.aggregate([
    {
      $match: { "merchantId": {
        $in: [u1,u2,u3]
    } }
  },

{ $group: {_id : null, sum : { $sum: "$totalPrice" } } }],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

router.route("/salebytitle").get(function(req,res){
  var u1 = new mongoose.Types.ObjectId("5e8ccd00b33391de9290e2da");
  var u2 = new mongoose.Types.ObjectId("5ec385328abe15508c19b2e2");
  var u3 = new mongoose.Types.ObjectId("5ea95e221c4c2824ccd3864a");


  
  DeliverdOrder.aggregate([
    {
      $match: { "merchantId": {
        $in: [u1,u2,u3]
    } }
  },
    
    { $group:
    { _id :'$title', sum:{$sum: "$totalPrice"},count:{$sum:"$quantity"}}
   
  }

]

,function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

router.route("/total/salebytitle").get(function(req,res){
  var u1 = new mongoose.Types.ObjectId("5e8ccd00b33391de9290e2da");
  var u2 = new mongoose.Types.ObjectId("5ec385328abe15508c19b2e2");
  var u3 = new mongoose.Types.ObjectId("5ea95e221c4c2824ccd3864a");

  DeliverdOrder.aggregate([
    {
      $match: { "merchantId": {
        $in: [u1,u2,u3]
    } }
  },
    { $group:
    { _id :null, sum:{$sum: "$totalPrice"}}
   
  }

]

,function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

router.route("/monthly").get(function(req,res){
  var u1 = new mongoose.Types.ObjectId("5e8ccd00b33391de9290e2da");
  var u2 = new mongoose.Types.ObjectId("5ec385328abe15508c19b2e2");
  var u3 = new mongoose.Types.ObjectId("5ea95e221c4c2824ccd3864a");
  DeliverdOrder.aggregate([
    {
      $match: { "merchantId": {
        $in: [u1,u2,u3]
    } }
  },
    
    {$group: {
    _id: {month: { $month: "$date" } }, 
    total: {$sum: "$totalPrice"},
    quantity: { $sum: "$quantity" },
    product: { $sum: 1 },
    
}}],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

router.route("/yearly").get(function(req,res){
  var u1 = new mongoose.Types.ObjectId("5e8ccd00b33391de9290e2da");
  var u2 = new mongoose.Types.ObjectId("5ec385328abe15508c19b2e2");
  var u3 = new mongoose.Types.ObjectId("5ea95e221c4c2824ccd3864a");

  DeliverdOrder.aggregate([
    {
      $match: { "merchantId": {
        $in: [u1,u2,u3]
    } }
  },
    {$group: {
    _id: {year: { $year: "$date" } }, 
    total: {$sum: "$totalPrice"},
    quantity: { $sum: "$quantity" },
    product: { $sum: 1 },
    
}},

]

,function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
      
        res.json(merchants);
        
      
       

      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

// router.route("/trending").get(function(req,res){

//   DeliverdOrder.find(
//     {}
// ,function(err, merchants){
//     if(err){
//       console.log(err);
//     }
//     else {
//       if(merchants.length>0){
//         res.json(merchants);
//       }
//       else{
//         res.json("Empty")
//       }
     
//     }
//   }).sort({quantity:-1}).limit(5)
// })


router.route("/monthly").get(function(req,res){
  DeliverdOrder.aggregate([{$group: {
    _id: {month: { $month: "$date" } }, 
    total: {$sum: "$totalPrice"},
    quantity: { $sum: "$quantity" },
    product: { $sum: 1 },
    
}}],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

router.route("/trending").get(function(req,res){

  DeliverdOrder.aggregate([{$group: {
    _id: "$productId", 
    product: { $sum: 1 },
    
}},

]

,function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
      
        res.json(merchants);
        
      
       

      }
      else{
        res.json("Empty")
      }
     
    }
  })
})


/////Sale by title///
router.route("/merchantSalebytitle/:id").get(function(req,res){
  var u1 = new mongoose.Types.ObjectId(req.params.id);
  DeliverdOrder.aggregate([
    {
      $match: { "merchantId":  u1
     }
  },
    
    { $group:
    { _id :'$title', sum:{$sum: "$totalPrice"},count:{$sum:"$quantity"}}
   
  }

]

,function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})



router.route("/merchantTotalbycategory/:id").get(function(req,res){
  var u1 = new mongoose.Types.ObjectId(req.params.id);
 
  DeliverdOrder.aggregate([
    {
      $match: { "merchantId": u1}
  },
    
    { $group:
    { _id : '$category', sum : { $sum: "$totalPrice" } , count:{$sum:"$quantity"}}
  }],function(err, result){
    if(err){
      console.log(err);
    }
    else {
      if(result.length>0){
        res.json(result);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})




  module.exports = router;