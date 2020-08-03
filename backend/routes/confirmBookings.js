const router = require('express').Router();
const newUser = require('../models/newUser.model');
var dateFormat = require('dateformat');
require("dotenv").config();
const nodemailer = require("nodemailer");

//Get All Bokings
let ConfirmBooking = require('../models/confirmBooking.model');
router.get('/', async (req, res) => {
	const bookings = await ConfirmBooking.find().sort('');
	res.send(bookings);
});
//Show User their booking
router.get('/:userId', async (req, res) => {
	const bookings = await ConfirmBooking.find({ userId: req.params.userId }).sort('bookingDate');
	res.send(bookings);
});
router.get('/merchant/:merchantId', async (req, res) => {
	const bookings = await ConfirmBooking.find({ merchantId: req.params.merchantId }).sort('bookingDate');
	res.send(bookings);
});
//Delete Booking By User
router.route('/delete/:id').get(function(req, res) {
	ConfirmBooking.findByIdAndRemove({ _id: req.params.id }, function(err, booking) {
		if (err) res.json(err);
		else res.json('Successfully removed');
	});
});

//Booking
router.post('/', async (req, res) => {
	const userId = await newUser.findById(req.body.userId);
	if (!userId) return res.status(400).send('Invalid user.');
	let booking = new ConfirmBooking({
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
                subject: "Booking Confirmation",
				html: "<h2>Your Booking Request has been accepted By the Shop </h2>" +
						"<h3>Your Booking Details</h3>" +
						"<h4> Product Name:" + req.body.title+"</h4>"+
						" <h4>Quantity:" +req.body.quantity+"</h4>"+
						" <h4>Price " + req.body.totalPrice+"</h4>"+
						"<h4>Booking Date"+dateFormat(req.body.bookingDate)+"</h4>"+
						"<p>Thanks you choose Shop Inn for shopping .  Check Your Details By Login  <p>"
						
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
module.exports = router;
