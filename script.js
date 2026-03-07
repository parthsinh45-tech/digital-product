function updateResume(){

document.getElementById("pname").innerText =
document.getElementById("name").value;

document.getElementById("prole").innerText =
document.getElementById("role").value;

document.getElementById("pskills").innerText =
document.getElementById("skills").value;

document.getElementById("pexperience").innerText =
document.getElementById("experience").value;

}



function payNow(){

var options={

key:"rzp_live_xxxxx",

amount:2900,

currency:"INR",

name:"AI Resume Builder",

description:"Resume PDF Download",

handler:function(){

window.print();

}

};

var rzp=new Razorpay(options);

rzp.open();

}
