let globalData = {};

fetch("data.json")
.then(res => res.json())
.then(data => {

    globalData = data;

    document.getElementById("tagline").innerText =
    data.tagline;

    renderProblems();
    renderSolutions();
    renderServices();

});

/* RENDER */

function renderProblems(){

    let html = "";

    globalData.problems.forEach(p => {

        html += `
        <div class="card">
            <h3>❌ ${p.title}</h3>
            <p>${p.desc}</p>
        </div>
        `;

    });

    document.getElementById("problems").innerHTML = html;

}

function renderSolutions(){

    let html = "";

    globalData.solutions.forEach(s => {

        html += `
        <div class="card">
            <h3>✅ ${s.title}</h3>
            <p>${s.desc}</p>
        </div>
        `;

    });

    document.getElementById("solutions").innerHTML = html;

}

function renderServices(){

    let html = "";

    globalData.services.forEach(s => {

        html += `
        <div class="card">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <strong>${s.price}</strong>
        </div>
        `;

    });

    document.getElementById("services-list").innerHTML = html;

}

/* MODAL */

function openModal(){

    document.getElementById("modal").style.display =
    "block";

}

function closeModal(){

    document.getElementById("modal").style.display =
    "none";

}

/* CLOSE MODAL OUTSIDE */

window.onclick = function(event){

    let modal = document.getElementById("modal");

    if(event.target == modal){

        modal.style.display = "none";

    }

}

/* NAVBAR EFFECT */

window.addEventListener("scroll",function(){

    let navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(2,6,23,.95)";

    }else{

        navbar.style.background =
        "rgba(2,6,23,.7)";

    }

});

/* TYPING EFFECT */

new Typed("#typing",{

    strings:[
        "Power BI Dashboards",
        "Business Intelligence",
        "Interactive Reports"
    ],

    typeSpeed:50,
    backSpeed:30,
    loop:true

});

/* LOADER */

window.addEventListener("load",()=>{

    document.getElementById("loader").style.display =
    "none";

});

/* SCROLL REVEAL */

ScrollReveal().reveal('.card', {

    distance:'50px',
    duration:1000,
    easing:'ease',

    origin:'bottom',

    interval:100

});

function openImage(src){
    const modal = document.getElementById("imgModal");
    const img = document.getElementById("imgPreview");

    img.src = src;
    modal.style.display = "flex";
}

function closeImage(){
    document.getElementById("imgModal").style.display = "none";
}
