let globalData = {};

/* ================= LOAD DATA ================= */
fetch("data.json")
.then(res => res.json())
.then(data => {
    globalData = data;

    document.getElementById("tagline").innerText = data.tagline;

    renderServices();
});

/* ================= RENDER SERVICES ================= */
function renderServices(){

    let html = "";

    globalData.services.forEach((s,index) => {
        html += `
        <div class="card service-card" data-index="${index}">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <strong>${s.price}</strong>
            <div class="click-info">Click for details →</div>
        </div>
        `;
    });

    document.getElementById("services-list").innerHTML = html;

    /* IMPORTANT: attach event AFTER render */
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("click", function(){
            const index = this.getAttribute("data-index");
            openService(index);
        });
    });

}

/* ================= SERVICE MODAL ================= */
function openService(index){

    const s = globalData.services[index];

    document.getElementById("serviceTitle").innerText = s.title;
    document.getElementById("serviceDesc").innerText = s.longDesc;
    document.getElementById("servicePrice").innerText = s.price;

    let features = "";
    s.features.forEach(f => {
        features += `<div>✅ ${f}</div>`;
    });

    document.getElementById("serviceFeatures").innerHTML = features;

    document.getElementById("serviceModal").style.display = "block";
}

/* ================= CONTACT MODAL ================= */
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("modal");
const closeContact = document.getElementById("closeContact");

contactBtn.addEventListener("click", () => {
    contactModal.style.display = "block";
});

closeContact.addEventListener("click", () => {
    contactModal.style.display = "none";
});

/* ================= SERVICE CLOSE ================= */
const serviceModal = document.getElementById("serviceModal");
const closeService = document.getElementById("closeService");

closeService.addEventListener("click", () => {
    serviceModal.style.display = "none";
});

/* ================= CLICK OUTSIDE ================= */
window.addEventListener("click", function(e){

    if(e.target === contactModal){
        contactModal.style.display = "none";
    }

    if(e.target === serviceModal){
        serviceModal.style.display = "none";
    }

});

/* ================= TYPING ================= */
new Typed("#typing", {
    strings:["Power BI Dashboards","Business Intelligence"],
    typeSpeed:50,
    backSpeed:30,
    loop:true
});
