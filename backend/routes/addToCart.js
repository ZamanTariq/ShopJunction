const router = require('express').Router();
 const newUser = require('../models/newUser.model');
const MerchantProduct = require('../models/merchantProducts.model')
//Model Require//
let AddToCart = require('../models/addToCart.model');
var _ = require('lodash');

// var multer = require('multer');
// var storage = multer.diskStorage({
// 	destination: function(req, file, cb) {
// 		cb(null, '../public/merchantUpload/');
// 	},
// 	filename: function(req, file, cb) {
// 		let a = file.originalname.split('.');
// 		cb(null, `${file.fieldname}-${Date.now()}.${a[a.length - 1]}`);
// 	}
// });

// var upload = multer({ storage: storage });

router.get('/', async (req, res) => {
	  const orders = await AddToCart.find().sort('quantity');
	  res.send(orders);
	});


	// router.get('/:userId', async (req, res) => {
	// 	const orders = await AddToCart.find({userId:req.params.userId}).sort('quantity');
	// 	res.send(orders);
	//   });	
	//   const c = _.assign({}, a, b);
	  router.get('/:id', async (req, res) => {
		var arr=[];
		var user =  await AddToCart.find({userId:req.params.id}).select('userId productId userEmail quantity total Price')

		 try {
			for(let i=0;i<user.length;i++){
				let product= await  MerchantProduct.findOne({_id :user[i].productId}).select(' _id merchantId title image category price shopAddress company stock')
				
				var user1 =  await AddToCart.findById({_id:user[i]._id}).select(' _id userId  userEmail userAddress userName   userPhone  quantity totalPrice userAddress')
				var myObj = new Object();
				myObj._id= user1._id
				myObj.userId= user1.userId;
				myObj.userEmail=user1.userEmail;
				myObj.userName=user1.userName;
			   myObj.userPhone=user1.userPhone;
				myObj.userAddress=user1.userAddress;
				myObj.quantity=user1.quantity;
				myObj.totalPrice=user1.totalPrice;
		
	
	
				var obj1  = new Object();
				obj1.productId= product._id;
				obj1.merchantId= product.merchantId;
			obj1.title=product.title;
			obj1.image=product.image;
			obj1.category=product.category;
			obj1.price=product.price;
			obj1.company=product.company;
			obj1.stock=product.stock;
			obj1.shopAddress=product.shopAddress;
	
	
				var object3 = {...myObj,...obj1}
				arr.push(object3)
	
			}
			 
		 } catch (error) {

			console.log(error)
			 
		 }
	



		 res.send(arr)

	  });


// 	  router.delete('delete/:id', async (req, res) => {
// 	 await AddToCart.findByIdAndRemove({_id: req.params.id}, function(err, addtocart){
// 			if(err) res.json(err);
// 			else res.json('Successfully removed');
// 		});
// });

router.route('/delete/:id').get(function (req, res) {
	AddToCart.findByIdAndRemove({_id: req.params.id}, function(err, merchant){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

router.post('/', async (req, res) =>{
    const userId = await newUser.findById(req.body.userId);
    if (!userId) return res.status(400).send("Invalid user.");
	let addtocart = new AddToCart({
		userId: req.body.userId,
		
		productId:req.body.productId,
		userEmail:req.body.userEmail,
		quantity:req.body.quantity,
		totalPrice:req.body.totalPrice,
		userAddress:req.body.userAddress,
		userName:req.body.userName,
		userPhone:req.body.userPhone
	});
	addtocart
		.save()
		.then((addtocart) => {
			res.status(200).json({ business: 'Add to cart successfully' });
		})
		.catch((err) => {
			res.status(400).send('unable to save to database');
		});
});


  //  Defined update route
  router.route('/update/:id').post(function (req, res) {
	AddToCart.findById(req.params.id, function(err, addToCart) {
	if (!addToCart)
	  res.status(404).send("data is not found");
	else {
		addToCart.userId= req.body.userId;
		addToCart.merchantId=req.body.merchantId;
		addToCart.productId=req.body.productId;
		addToCart.title=req.body.title;
		addToCart.image=req.body.image;
		addToCart.category= req.body.category;
		addToCart.price= req.body.price;
		addToCart.company= req.body.company;
		addToCart.info= req.body.info;
		addToCart.inCart= req.body.inCart;
		addToCart.count= req.body.count;
        addToCart.total= req.body.total;
		addToCart.quantity=req.body.quantity;
		addToCart.totalPrice=req.body.totalPrice;
		addToCart.userAddress=req.body.userAddress;
		addToCart.userName=req.body.userName;
		addToCart.userPhone=req.body.userPhone

		addToCart.save().then(addToCart => {
		  res.json('Update complete');
	  })
	  .catch(err => {
			res.status(400).send("unable to update the database");
	  });
	}
  });
});

module.exports = router;