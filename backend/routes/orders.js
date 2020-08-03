const router = require('express').Router();
const newUser = require('../models/newUser.model');
const Order = require('../models/order')
const mongoose = require('mongoose')
require("dotenv").config();
const nodemailer = require("nodemailer");



router.post('/', async (req, res) =>{
    const userId = await newUser.findById(req.body.userId);
    if (!userId) return res.status(400).send("Invalid user.");
	let order = new Order({
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
                subject: " Succesfully Order Palacement",
                text: "Thank you!  your order have been  successfully placed . Product Name  "+req.body.title + "with quantity"+req.body.quantity+"And having amount of"+req.body.totalPrice+" in the shop having address" +req.body.shopAddress+"Thanks for shoping "
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

//Show result their orders
router.get('/merchant/:merchantId', async (req, res) => {
    const orders = await Order.find({merchantId:req.params.merchantId}).sort('quantity');
    res.send(orders);
  });
  //Show user their pending orders
router.get('/user/:userId', async (req, res) => {
    const orders = await Order.find({userId:req.params.userId}).sort('date');
    res.send(orders);
}); 


//Delete Orders
router.route('/delete/:id').get(function (req, res) {
	Order.findByIdAndRemove({_id: req.params.id}, function(err, merchant){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});
router.get('/Merchant/:d', async (req, res) => {   
    var start = new Date();
start.setHours(0,0,0,0);

var end = new Date();
end.setHours(23,59,59,999);
const array =[];
    const ElectronicDevices = await Order.find({"category":"Electronic Devices"}).countDocuments();
    
  
    array.push(ElectronicDevices)

 const d = array.keys() 
    res.send(d);

    });
    router.route("/total/:merchantId").get(function(req,res){
    
    
      Order.aggregate([
        {
          $match: { "merchantId": req.params.merchantId }
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
    
    
  module.exports = router;