const express=require("express");

const fetch=require("node-fetch");

const app=express();

app.use(express.json());

app.post("/ai",async(req,res)=>{

let {name,role,skills}=req.body;

let prompt=`
Create a professional resume summary
Name: ${name}
Role: ${role}
Skills: ${skills}
`;

let response=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_OPENAI_KEY"
},

body:JSON.stringify({

model:"gpt-4.1-mini",

messages:[
{role:"user",content:prompt}
]

})

});

let data=await response.json();

res.json({

resume:data.choices[0].message.content

});

});

app.listen(3000);
