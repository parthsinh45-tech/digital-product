function payNow(){

var options = {

"key": "YOUR_RAZORPAY_KEY",

"amount": 4900,

"currency": "INR",

"name": "PikaTech45",

"description": "Cricket Ebook",

"handler": function (response){

window.location.href="success.html";

}

};

var rzp = new Razorpay(options);

rzp.open();

}
