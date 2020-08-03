const router = require('express').Router();
 const newUser = require('../models/newUser.model');

//Model Require//

let AdminFavourite = require('../models/AdminFavourite')

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
	  const favourites = await AdminFavourite.find().sort('quantity');
	  res.send(favourites);
	});


	router.get('/:userId', async (req, res) => {
		const favourites = await AdminFavourite.find({userId:req.params.userId}).sort('quantity');
		res.send(favourites);
	  });	
	
// 	  router.delete('delete/:id', async (req, res) => {
// 	 await AddToCart.findByIdAndRemove({_id: req.params.id}, function(err, addtocart){
// 			if(err) res.json(err);
// 			else res.json('Successfully removed');
// 		});
// });

router.route('/delete/:id').get(function (req, res) {
	AdminFavourite.findByIdAndRemove({_id: req.params.id}, function(err, favourites){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

router.post('/', async (req, res) =>{
    const userId = await newUser.findById(req.body.userId);
    if (!userId) return res.status(400).send("Invalid user.");
	let favourite = new AdminFavourite({
        userId: req.body.userId,
        merchantId: req.body.merchantId,
        productId:req.body.productId,
		title: req.body.title,
		image: req.body.image,
		category: req.body.category,
		price: req.body.price,
		company: req.body.company,
		info: req.body.info,
		inCart: req.body.inCart,
		count: req.body.count,
		total: req.body.total,
		userAddress: req.body.userAddress,
		shopName: req.body.shopName,
		shopAddress: req.body.shopAddress,
		
		
		
	});
	favourite
		.save()
		.then((favourite) => {
			res.status(200).json({ business: 'Add to cart successfully' });
		})
		.catch((err) => {
			res.status(400).send('unable to save to database');
		});
});
module.exports = router;