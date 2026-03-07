function generateResume(){

let name=document.getElementById("name").value;
let role=document.getElementById("role").value;
let skills=document.getElementById("skills").value;
let experience=document.getElementById("experience").value;

let resume=`

<h2>${name}</h2>

<h3>${role}</h3>

<h4>Skills</h4>

<p>${skills}</p>

<h4>Experience</h4>

<p>${experience}</p>

`;

document.getElementById("preview").innerHTML=resume;

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
