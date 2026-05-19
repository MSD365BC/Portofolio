let globalData = {};

fetch("data.json")
.then(res => res.json())
.then(data => {

    globalData = data;

    document.getElementById("tagline").innerText = data.tagline;

    render("problems", data.problems);
    render("solutions", data.solutions);
    renderServices();
    renderTestimonials();

});

/* RENDER */
function render(id, items){
    let html = "";
    items.forEach(i => {
        html += `
        <div class="card">
            <h3>${i.title}</h3>
            <p>${i.desc}</p>
        </div>`;
    });
    document.getElementById(id).innerHTML = html;
}

function renderServices(){
    let html = "";
    globalData.services.forEach(s => {
        html += `
        <div class="card">
            ${s.badge ? `<div class="badge-popular">${s.badge}</div>` : ""}
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <h2>${s.price}</h2>
            <a href="https://wa.me/628118481208" target="_blank" class="btn">
                ${s.cta}
            </a>
        </div>`;
    });
    document.getElementById("services-list").innerHTML = html;
}

function renderTestimonials(){
    let html = "";
    globalData.testimonials.forEach(t => {
        html += `
        <div class="card">
            <p>"${t.text}"</p>
            <strong>${t.name}</strong><br>
            <small>${t.company}</small>
        </div>`;
    });
    document.getElementById("testimonials").innerHTML = html;
}

/* MODAL */
function openModal(){
    document.getElementById("modal").style.display = "block";
}
function closeModal(){
    document.getElementById("modal").style.display = "none";
}

/* SCROLL REVEAL */
function revealOnScroll(){
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
