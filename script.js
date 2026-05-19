let globalData = {};

/* =========================
   FETCH DATA JSON
========================= */
fetch("data.json")
.then(res => res.json())
.then(data => {

    globalData = data || {};

    const taglineEl = document.getElementById("tagline");
    if (taglineEl) {
        taglineEl.innerText = data.tagline || "";
    }

    renderProblems();
    renderSolutions();
    renderServices();
})
.catch(err => {
    console.error("Error loading data.json:", err);
});

/* =========================
   RENDER PROBLEMS
========================= */
function renderProblems(){

    const container = document.getElementById("problems");
    if (!container || !globalData.problems) return;

    let html = "";

    globalData.problems.forEach(p => {
        html += `
        <div class="card">
            <h3>❌ ${p.title}</h3>
            <p>${p.desc}</p>
        </div>
        `;
    });

    container.innerHTML = html;
}

/* =========================
   RENDER SOLUTIONS
========================= */
function renderSolutions(){

    const container = document.getElementById("solutions");
    if (!container || !globalData.solutions) return;

    let html = "";

    globalData.solutions.forEach(s => {
        html += `
        <div class="card">
            <h3>✅ ${s.title}</h3>
            <p>${s.desc}</p>
        </div>
        `;
    });

    container.innerHTML = html;
}

/* =========================
   RENDER SERVICES
========================= */
function renderServices(){

    const container = document.getElementById("services-list");
    if (!container || !globalData.services) return;

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

    container.innerHTML = html;
}

/* =========================
   MODAL CONTACT
========================= */
function openModal(){
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "block";
}

function closeModal(){
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "none";
}

/* close modal klik luar */
window.onclick = function(event){

    const modal = document.getElementById("modal");

    if (modal && event.target === modal){
        modal.style.display = "none";
    }
};

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    navbar.style.background = window.scrollY > 50
        ? "rgba(2,6,23,.95)"
        : "rgba(2,6,23,.7)";
});

/* =========================
   TYPING EFFECT
========================= */
if (typeof Typed !== "undefined") {
    new Typed("#typing", {
        strings: [
            "Power BI Dashboards",
            "Business Intelligence",
            "Interactive Reports"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

/* =========================
   LOADER
========================= */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
});

/* =========================
   SCROLL REVEAL
========================= */
if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal('.card', {
        distance: '50px',
        duration: 1000,
        easing: 'ease',
        origin: 'bottom',
        interval: 100
    });
}

/* =========================
   IMAGE ZOOM (FIXED VERSION)
========================= */
function openImage(src){

    const modal = document.getElementById("imgModal");
    const img = document.getElementById("imgPreview");

    if (!modal || !img) return;

    img.src = src;
    modal.classList.add("show");
}

function closeImage(){

    const modal = document.getElementById("imgModal");

    if (!modal) return;

    modal.classList.remove("show");
}
