function generatePassword(){

let length=document.getElementById("length").value;

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let password="";

for(let i=0;i<length;i++){

password+=chars[Math.floor(Math.random()*chars.length)];

}

document.getElementById("password").innerText=password;

}



function formatJSON(){

let input=document.getElementById("jsonInput").value;

try{

let formatted=JSON.stringify(JSON.parse(input),null,4);

document.getElementById("jsonOutput").innerText=formatted;

}catch{

document.getElementById("jsonOutput").innerText="Invalid JSON";

}

}



function generateColor(){

let color="#"+Math.floor(Math.random()*16777215).toString(16);

document.getElementById("colorBox").style.background=color;

document.getElementById("colorCode").innerText=color;

}



function encodeBase(){

let text=document.getElementById("baseInput").value;

document.getElementById("baseOutput").innerText=btoa(text);

}
