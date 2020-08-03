const router = require('express').Router();
const newUser = require('../models/newUser.model');
const MerchantProduct = require('../models/merchantProducts.model')


//Get All Bokings
let Booking = require('../models/booking.model');
router.get('/', async (req, res) => {
	const bookings = await Booking.find().sort('');
	res.send(bookings);
});
//Show User their booking
router.get('/:userId', async (req, res) => {
	const bookings = await Booking.find({ userId: req.params.userId }).sort('bookingDate');
	res.send(bookings);
});
router.get('/merchant/:merchantId', async (req, res) => {
	var arr=[];
	var user =  await Booking.find({merchantId:req.params.merchantId})

	 try {
		for(let i=0;i<user.length;i++){
			let product= await  MerchantProduct.findOne({_id :user[i].productId}).select(' merchantId stock')
			
			var user1 =  await Booking.findById({_id:user[i]._id}).select(' _id userId merchantId productId userEmail title image category price company info quantity userAddress shopName shopAddress totalPrice  bookingDate paymentMethod currentDate')
		    var myObj = new Object();
			myObj._id= user1._id
			myObj.userId= user1.userId;
			myObj.merchantId= user1.merchantId;
			myObj.productId= user1.productId;
			myObj.userEmail= user1.userEmail;
			myObj.title=user1.title;
			myObj.image=user1.image;
			myObj.category=user1.category;
			myObj.price=user1.price;
			myObj.company=user1.company;
			myObj.info=user1.info;
			myObj.quantity=user1.quantity;
			myObj.userAddress=user1.userAddress;
			myObj.shopName=user1.shopName;
			myObj.shopAddress=user1.shopAddress;
			myObj.totalPrice=user1.totalPrice;
			myObj.bookingDate=user1.bookingDate;
			myObj.paymentMethod=user1.paymentMethod;
			myObj.currentDate=user1.currentDate;
	


			var obj1  = new Object();
			obj1.stock=product.stock;
			obj1.merchant=product.productId
		


			var object3 = {...myObj,...obj1}
			arr.push(object3)

		}
		 
	 } catch (error) {

		console.log(error)
		 
	 }




	 res.send(arr)


});
//get bookingby id 
router.get('/accept/:bookingId', async (req, res) => {
	const bookings = await Booking.find({ _id: req.params.bookingId }).sort('bookingDate');
	res.send(bookings);
});
//Delete Booking By User
router.route('/delete/:id').get(function(req, res) {
	Booking.findByIdAndRemove({ _id: req.params.id }, function(err, booking) {
		if (err) res.json(err);
		else res.json('Successfully removed');
	});
});

//Booking
router.post('/', async (req, res) => {
	const userId = await newUser.findById(req.body.userId);
	if (!userId) return res.status(400).send('Invalid user.');
	let booking = new Booking({
		userId: req.body.userId,
		merchantId: req.body.merchantId,
		productId:req.body.productId,
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
		quantity: req.body.quantity,
		userAddress: req.body.userAddress,
		shopName: req.body.shopName,
		shopAddress: req.body.shopAddress,
		bookingQuantity: req.body.bookingQuantity,
		totalPrice: req.body.totalPrice,
		bookingDate: req.body.bookingDate,
		paymentMethod:req.body.paymentMethod
	});
	booking
		.save()
		.then((booking) => {
			res.status(200).json({ business: 'Add to cart successfully' });
		})
		.catch((err) => {
			res.status(400).send('unable to save to database');
		});
});
module.exports = router;
