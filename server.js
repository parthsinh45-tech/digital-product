const express = require("express");
const crypto = require("crypto");
const Razorpay = require("razorpay");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const razorpay = new Razorpay({
key_id: "YOUR_KEY_ID",
key_secret: "YOUR_KEY_SECRET"
});

app.post("/create-order", async (req, res) => {

const options = {
amount: 4900,
currency: "INR"
};

const order = await razorpay.orders.create(options);

res.json(order);

});

app.post("/verify-payment", (req, res) => {

const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;

const body = razorpay_order_id + "|" + razorpay_payment_id;

const expected = crypto
.createHmac("sha256","YOUR_KEY_SECRET")
.update(body)
.digest("hex");

if(expected === razorpay_signature){

res.json({success:true, download:"/ebooks/batting-guide.pdf"});

}else{

res.json({success:false});

}

});

app.listen(3000,()=>{
console.log("Server running");
});
