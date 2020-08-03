const router = require('express').Router();
const newUser = require('../models/newUser.model');
const Product = require('../models/merchantProducts.model')
const Comments =  require('../models/comments')




router.post('/', async (req, res) =>{
    const userId = await newUser.findById(req.body.userId);
    if (!userId) return res.status(400).send("Invalid user.");
	let comment = new Comments({
    userId: req.body.userId,
    productId:req.body.productId,
    userName:req.body.userName,
    content:req.body.content

	});
	comment.save()
		.then((comment) => {
			res.status(200).json({ business: 'Add  comment successfully' });
			
		})
		.catch((err) => {
			res.status(400).send('unable to save to database');
		});
});

//Show result their orders
router.get('/product/:productId', async (req, res) => {
    const comments = await Comments.find({productId:req.params.productId}).sort('date');
    res.send(comments);
  });
  


//Delete Orders
router.route('/delete/:id').get(function (req, res) {
	Comments.findByIdAndRemove({_id: req.params.id}, function(err, merchant){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

    
  module.exports = router;