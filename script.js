async function generateResume(){

let name=document.getElementById("name").value;
let role=document.getElementById("role").value;
let skills=document.getElementById("skills").value;

let response=await fetch("/ai",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
role,
skills
})

});

let data=await response.json();

document.getElementById("preview").innerHTML=data.resume;

}



function payNow(){

var options={

key:"rzp_live_xxxxx",

amount:2900,

currency:"INR",

name:"AI Resume Builder",

description:"Premium Resume Download",

handler:function(){

window.print();

}

};

var rzp=new Razorpay(options);

rzp.open();

}
