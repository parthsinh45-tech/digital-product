function payNow(){

var options = {

"key": "rzp_live_SOJbS3S4m8sNI3",

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
