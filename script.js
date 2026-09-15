const tools=[
["🔤","Word Counter","Count words and characters.",()=>{let t=prompt("Paste text:");if(t!==null)alert("Words: "+(t.trim()?t.trim().split(/\s+/).length:0)+"\nCharacters: "+t.length)}],
["🔠","Text Case Converter","UPPER, lower and Title Case.",()=>{let t=prompt("Enter text:");if(t!==null)alert(t.toUpperCase()+"\n\n"+t.toLowerCase()+"\n\n"+t.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()))}],
["🎂","Age Calculator","Calculate age from a birth date.",()=>{let s=prompt("Birth date YYYY-MM-DD:");if(!s)return;let d=new Date(s),n=new Date(),a=n.getFullYear()-d.getFullYear();if(n<new Date(n.getFullYear(),d.getMonth(),d.getDate()))a--;alert("Age: "+a+" years")}],
["％","Percentage Calculator","Find a percentage of a number.",()=>{let p=+prompt("Percentage:"),n=+prompt("Number:");if(isFinite(p)&&isFinite(n))alert(p+"% of "+n+" = "+n*p/100)}],
["▣","QR Code Generator","Create a QR code from text or URL.",()=>{let t=prompt("Text or URL:");if(t)open("https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+encodeURIComponent(t))}],
["🔐","Password Generator","Generate a random password.",()=>{let c="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%",p="";for(let i=0;i<16;i++)p+=c[Math.floor(Math.random()*c.length)];alert(p)}],
["📏","Unit Converter","Convert meters to common units.",()=>{let m=+prompt("Meters:");if(isFinite(m))alert(m+" m = "+m*100+" cm\n"+m+" m = "+(m*3.28084).toFixed(3)+" ft")}],
["⚖️","BMI Calculator","Calculate BMI.",()=>{let kg=+prompt("Weight kg:"),cm=+prompt("Height cm:");if(kg>0&&cm>0)alert("BMI: "+(kg/(cm/100)**2).toFixed(1))}],
["🖼️","Image Resizer","Resize images in your browser.","demo"],
["🧮","Average Calculator","Average of comma-separated numbers.",()=>{let a=prompt("Numbers:");if(a){let x=a.split(",").map(Number).filter(isFinite);alert("Average: "+x.reduce((s,v)=>s+v,0)/x.length)}}],
["🔢","Number Formatter","Format numbers with commas.",()=>{let n=prompt("Number:");if(n)alert(Number(n).toLocaleString())}],
["📝","Text Cleaner","Remove extra spaces.",()=>{let t=prompt("Text:");if(t!==null)alert(t.replace(/[ \t]+/g," ").trim())}],
["🔄","JSON Formatter","Pretty-print JSON.",()=>{try{alert(JSON.stringify(JSON.parse(prompt("Paste JSON:")),null,2))}catch(e){alert("Invalid JSON")}}],
["🔗","URL Encoder","Encode text for URLs.",()=>{let t=prompt("Text:");if(t!==null)alert(encodeURIComponent(t))}],
["📅","Days Between Dates","Find days between two dates.",()=>{let a=new Date(prompt("First date YYYY-MM-DD:")),b=new Date(prompt("Second date YYYY-MM-DD:"));alert(Math.abs(Math.round((b-a)/86400000))+" days")}],
["🎯","Tip Calculator","Calculate tip and total.",()=>{let b=+prompt("Bill:"),p=+prompt("Tip %:");if(b>=0&&p>=0)alert("Tip: "+(b*p/100).toFixed(2)+"\nTotal: "+(b+b*p/100).toFixed(2))}],
["🌡️","Temperature Converter","Celsius to Fahrenheit.",()=>{let c=+prompt("Celsius:");if(isFinite(c))alert(c+"°C = "+(c*9/5+32).toFixed(2)+"°F")}],
["📐","Square Calculator","Calculate square area.",()=>{let s=+prompt("Side:");if(s>=0)alert("Area: "+s*s)}],
["⏱️","Countdown Timer","Simple countdown starter.",()=>alert("Add a full visual timer in the next version.")],
["🧾","Invoice Helper","Quickly calculate subtotal and tax.",()=>{let s=+prompt("Subtotal:"),t=+prompt("Tax %:");if(s>=0&&t>=0)alert("Tax: "+(s*t/100).toFixed(2)+"\nTotal: "+(s+s*t/100).toFixed(2))}]
];
const grid=document.querySelector("#grid"),search=document.querySelector("#search"),count=document.querySelector("#count");
function render(q=""){grid.innerHTML="";let f=tools.filter(x=>(x[1]+" "+x[2]).toLowerCase().includes(q.toLowerCase()));count.textContent=f.length+" tools";f.forEach(x=>{let c=document.createElement("article");c.className="card";c.innerHTML=`<div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p><button>Open tool</button>`;c.querySelector("button").onclick=typeof x[3]=="function"?x[3]:()=>alert("This tool is a starter placeholder.");grid.appendChild(c)})}search.oninput=()=>render(search.value);render();