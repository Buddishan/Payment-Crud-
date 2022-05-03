const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const paymentSchema=new Schema({
    paymentType:{
        type:String,
        required:true
    },
    cardHolder:{
        type:String,
        required:true
    },
    expDate:{
        type:String,
        required:true
    },
   
    cvvNo:{
        type:Number,
        required:true
    },
    cardNo:{
        type:Number,
        required:true
    },
    cardHolderAddress:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const Payment=mongoose.model("Payment",paymentSchema);
module.exports=Payment;