const mongoose = require('mongoose');
//  For Schema //
const Schema = mongoose.Schema;
const newMerchant = require('./newMerchant.model');
let MerchantProduct = new Schema(
	{
		merchantId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: newMerchant
		},
		title: {
			type: String
		},
		image: {
			type: String
		},
		category: {
			type: String
		},
		rating: {
			type: String
		},
		oldprice: {
			type: String
		},
		price: {
			type: Number
		},
		company: {
			type: String
		},
		info: {
			type: String
		},
		inCart: {
			type: Boolean
		},
		count: {
			type: Number
		},
		total: {
			type: Number
		},
		merchantPhone:{
			type:String
		},
		shopName:{
			type:String
		},
		shopAddress:{
			type:String
		},
		bookingStatus:{
			type: Boolean
		},
		orderStatus:{
			type: Boolean
		},
		minBookQuantity:{
			type: Number
		},

		maxBookQuantity:{
			type: Number
		},

		stock:{
          type:Number
		},
		currentDate:{
			type:Date,
			default: Date.now
		},
	},
	{
		collection: 'merchantProduct',
		timestamps:true
	}
);

module.exports = mongoose.model('MerchantProduct', MerchantProduct);
