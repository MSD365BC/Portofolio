let globalData = {};

fetch("data.json")
.then(res=>res.json())
.then(data=>{
globalData=data;
document.getElementById("tagline").innerText=data.tagline;
renderProblems();
renderSolutions();
renderServices();
});

function renderProblems(){
let el=document.getElementById("problems");
if(!el) return;

let html="";
globalData.problems.forEach(p=>{
html+=`<div class="card">
<h3>❌ ${p.title}</h3>
<p>${p.desc}</p>
</div>`;
});
el.innerHTML=html;
}

function renderSolutions(){
let el=document.getElementById("solutions");
if(!el) return;

let html="";
globalData.solutions.forEach(s=>{
html+=`<div class="card">
<h3>✅ ${s.title}</h3>
<p>${s.desc}</p>
</div>`;
});
el.innerHTML=html;
}

function renderServices(){
let el=document.getElementById("services-list");
if(!el) return;

let html="";
globalData.services.forEach(s=>{
html+=`<div class="card">
<h3>${s.title}</h3>
<p>${s.desc}</p>
<strong>${s.price}</strong>
</div>`;
});
el.innerHTML=html;
}

function openModal(){document.getElementById("modal").style.display="block";}
function closeModal(){document.getElementById("modal").style.display="none";}

function openImage(src){
let modal=document.getElementById("imgModal");
let img=document.getElementById("imgPreview");
img.src=src;
modal.style.display="flex";
}

function closeImage(){
document.getElementById("imgModal").style.display="none";
}

new Typed("#typing",{
strings:["Dashboards","Business Intelligence","Analytics"],
typeSpeed:50,
loop:true
});

window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

ScrollReveal().reveal('.card',{distance:'50px',duration:800,interval:100});
