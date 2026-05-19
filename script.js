let globalData = {};

fetch("data.json")
.then(res => res.json())
.then(data => {

    globalData = data;

    document.getElementById("tagline").innerText = data.tagline;

    renderProblems();
    renderSolutions();
    renderServices();

});

/* RENDER */
function renderProblems(){
    let html = "";
    globalData.problems.forEach(p => {
        html += `<div class="card"><h3>❌ ${p.title}</h3><p>${p.desc}</p></div>`;
    });
    document.getElementById("problems").innerHTML = html;
}

function renderSolutions(){
    let html = "";
    globalData.solutions.forEach(s => {
        html += `<div class="card"><h3>✅ ${s.title}</h3><p>${s.desc}</p></div>`;
    });
    document.getElementById("solutions").innerHTML = html;
}

function renderServices(){
    let html = "";
    globalData.services.forEach(s => {
        html += `<div class="card">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <strong>${s.price}</strong>
        </div>`;
    });
    document.getElementById("services-list").innerHTML = html;
}

/* NAVBAR SCROLL */
window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50
    ? "rgba(2,6,23,.95)"
    : "rgba(2,6,23,.7)";
});

/* TYPING */
new Typed("#typing", {
    strings:[
        "Increase Profit with Data",
        "Automate Reporting",
        "Make Faster Decisions"
    ],
    typeSpeed:50,
    backSpeed:30,
    loop:true
});

/* SCROLL REVEAL */
ScrollReveal().reveal('.card', {
    distance:'40px',
    duration:900,
    interval:100,
    origin:'bottom'
});
