async function payNow(){

const res = await fetch("/create-order",{method:"POST"});
const order = await res.json();

var options = {

key:"rzp_live_SOJbS3S4m8sNI3",

amount:order.amount,

currency:"INR",

order_id:order.id,

handler:async function(response){

const verify = await fetch("/verify-payment",{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify(response)

});

const data = await verify.json();

if(data.success){

window.location=data.download;

}

}

};

var rzp=new Razorpay(options);

rzp.open();

}
