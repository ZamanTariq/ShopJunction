const router = require('express').Router();

const ContactUs =  require('../models/contactUs')




router.post('/', async (req, res) =>{
    
	let comment = new ContactUs({
   
    name:req.body.name,
    email:req.body.email,
    subject:req.body.subject,
    message:req.body.message

	});
	comment.save()
		.then((comment) => {
			res.status(200).json({ business: 'Add  contactus successfully' });
			
		})
		.catch((err) => {
			res.status(400).send('unable to save to database');
		});
});

//Show result their orders
router.get('/id', async (req, res) => {
    const contactus = await ContactUs.findById({_id:req.params.id}).sort('date');
    res.send(contactus);
  });
  


//Delete Orders
router.route('/delete/:id').get(function (req, res) {
	ContactUs.findByIdAndRemove({_id: req.params.id}, function(err, merchant){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

    
  module.exports = router;