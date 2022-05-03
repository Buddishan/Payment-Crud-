const router= require("express").Router();
let Payment =require("../models/payment");

router.route("/add").post((req,res)=>{
    const paymentType= req.body.paymentType;
    const cardHolder= req.body.cardHolder;
    const expDate= req.body.expDate;
    const price = req.body.price;
    const cardNo= Number(req.body.cardNo);
    const cvvNo= Number(req.body.cvvNo);
    const cardHolderAddress = req.body.cardHolderAddress;
   
    const newPayment = new Payment({
        paymentType,
        cardHolder,
        expDate,
        price,
        cvvNo,
        cardHolderAddress,
        cardNo,
        
    })
    newPayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Payment.find().then((payment)=>{
        res.json(payment)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route('/update/:id').put((req, res, next) => {
    Payment.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Payment updated successfully !')
      }
    })
  })

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await Payment.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" payment deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/get/:id').get((req, res) => {
   Payment.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;
