const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const url="mongodb+srv://IT20169312:ruwandiB1@itpmproject.e2srb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const port =process.env.port || 8070;

mongoose.connect(url,{useNewUrlparser:true, useUnifiedTopology:true});
mongoose.connection.once("open",()=>{
    console.log("mongoDB Connected");
});
const paymentRouter= require("./routes/payment.js");
app.use("/payment",paymentRouter);



app.listen(port,()=>{
    console.log("server is starting on port 8070");

});
