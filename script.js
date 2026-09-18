const tools=[
["📝","Word Counter","Count words and characters",()=>{const t=prompt("Enter text:")||"";alert(`Words: ${t.trim()?t.trim().split(/\\s+/).length:0}\nCharacters: ${t.length}`)}],
["🔤","Uppercase Converter","Convert text to UPPERCASE",()=>{alert((prompt("Enter text:")||"").toUpperCase())}],
["🔡","Lowercase Converter","Convert text to lowercase",()=>{alert((prompt("Enter text:")||"").toLowerCase())}],
["🧹","Text Cleaner","Remove extra spaces",()=>{alert((prompt("Enter text:")||"").replace(/\\s+/g," ").trim())}],
["{}","JSON Formatter","Format JSON neatly",()=>{try{alert(JSON.stringify(JSON.parse(prompt("Paste JSON:")||""),null,2))}catch(e){alert("Invalid JSON")}}],
["🔗","URL Encoder","Encode URL text",()=>{alert(encodeURIComponent(prompt("Enter text or URL:")||""))}],
["🔓","URL Decoder","Decode URL text",()=>{try{alert(decodeURIComponent(prompt("Enter encoded text:")||""))}catch(e){alert("Invalid encoded text")}}],
["🔐","Password Generator","Generate a random password",()=>{let c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",p="";for(let i=0;i<16;i++)p+=c[Math.floor(Math.random()*c.length)];alert(p)}],
["🎂","Age Calculator","Calculate age from birth date",()=>{let d=prompt("Birth date (YYYY-MM-DD):");if(!d)return;let b=new Date(d),n=new Date(),a=n.getFullYear()-b.getFullYear();if(n<new Date(n.getFullYear(),b.getMonth(),b.getDate()))a--;alert("Age: "+a+" years") }],
["📊","Percentage Calculator","Calculate a percentage",()=>{let a=+prompt("Percentage:"),b=+prompt("Number:");alert(a*b/100)}],
["➗","Average Calculator","Calculate average of numbers",()=>{let a=(prompt("Numbers separated by commas:")||"").split(",").map(Number).filter(Number.isFinite);alert(a.length?a.reduce((x,y)=>x+y,0)/a.length:"Invalid input")}],
["²","Square Calculator","Calculate square of a number",()=>{let n=+prompt("Number:");alert(n*n)}],
["🏷️","Discount Calculator","Calculate discounted price",()=>{let p=+prompt("Original price:"),d=+prompt("Discount %:");alert("Final price: "+(p-p*d/100))}],
["💰","Tip Calculator","Calculate tip and total",()=>{let b=+prompt("Bill:"),t=+prompt("Tip %:");alert(`Tip: ${b*t/100}\nTotal: ${b+b*t/100}`)}],
["🔢","Number Formatter","Format a number",()=>{let n=+prompt("Number:");alert(Number.isFinite(n)?n.toLocaleString():"Invalid number")}],
["🌡️","Temperature Converter","Celsius to Fahrenheit",()=>{let c=+prompt("Celsius:");alert(`${c} °C = ${(c*9/5+32).toFixed(2)} °F`)}],
["📅","Days Between Dates","Find days between two dates",()=>{let a=new Date(prompt("First date (YYYY-MM-DD):")),b=new Date(prompt("Second date (YYYY-MM-DD):"));alert(Math.round(Math.abs(b-a)/86400000)+" days")}],
["⏱️","Countdown Timer","Start a simple countdown",()=>{let s=+prompt("Seconds:");if(s>0){alert("Timer started!");setTimeout(()=>alert("Time is up!"),s*1000)}}],
["📏","Unit Converter","Convert kilometers to miles",()=>{let k=+prompt("Kilometers:");alert(`${k} km = ${(k*.621371).toFixed(3)} miles`)}],
["🖼️","Image Resizer","Open a browser image resizing helper",()=>{alert("Image Resizer: use your browser's image editor or upload an image to an image editing tool. This version keeps the site dependency-free.")}],
["🧾","Invoice Helper","Calculate invoice subtotal",()=>{let a=(prompt("Enter prices separated by commas:")||"").split(",").map(Number).filter(Number.isFinite),s=a.reduce((x,y)=>x+y,0);alert("Subtotal: "+s)}],
["◼️","QR Code Generator","Generate a QR code",()=>{let t=prompt("Enter text or URL:");if(t)open("https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+encodeURIComponent(t),"_blank")}]
];
function render(){const q=document.getElementById("search").value.toLowerCase();const list=tools.filter(x=>(x[1]+" "+x[2]).toLowerCase().includes(q));document.getElementById("count").textContent=list.length+" tools";document.getElementById("tools").innerHTML=list.map(x=>`<article class="card"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p><button>Open Tool</button></article>`).join("");document.querySelectorAll(".card button").forEach((b,i)=>b.onclick=()=>list[i][3]())}
document.getElementById("search").addEventListener("input",render);render();