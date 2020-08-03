const mongoose=require('mongoose');
//  For Schema //
const Schema =mongoose.Schema;

const comment_Schema = new Schema({
    content:{ 
        type:String
        
    },
    post:{
        //When we relate with some other table,its belong's to other table
        type: mongoose.Schema.Types.ObjectId,
        ref:"newUser",
     
    }
},
 {
    timestamps: true
});
module.exports = mongoose.model('Comment', comment_Schema);