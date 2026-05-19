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
let html="";
globalData.problems.forEach(p=>{
html+=`<div class="card"><h3>❌ ${p.title}</h3><p>${p.desc}</p></div>`;
});
document.getElementById("problems").innerHTML=html;
}

function renderSolutions(){
let html="";
globalData.solutions.forEach(s=>{
html+=`<div class="card"><h3>✅ ${s.title}</h3><p>${s.desc}</p></div>`;
});
document.getElementById("solutions").innerHTML=html;
}

function renderServices(){
let html="";
globalData.services.forEach(s=>{
html+=`<div class="card"><h3>${s.title}</h3><p>${s.desc}</p><strong>${s.price}</strong></div>`;
});
document.getElementById("services-list").innerHTML=html;
}

/* MODAL */
function openModal(){
document.getElementById("modal").style.display="block";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

/* IMAGE ZOOM */
function openImage(src){
document.getElementById("imgPreview").src=src;
document.getElementById("imgModal").style.display="flex";
}

function closeImage(){
document.getElementById("imgModal").style.display="none";
}

/* WHATSAPP AUTO MESSAGE */
function sendWhatsApp(){
let text = `Halo Pak Suroso,

Saya membutuhkan jasa pembuatan dashboard Power Bi.

Terimakasih`;

let url = "https://wa.me/628118481208?text=" + encodeURIComponent(text);

window.open(url, "_blank");
}

/* TYPING */
new Typed("#typing",{
strings:["Dashboards","Analytics","Business Intelligence"],
typeSpeed:50,
loop:true
});

/* LOADER */
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

/* SCROLL */
ScrollReveal().reveal('.card',{distance:'50px',duration:800,interval:100});
