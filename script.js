let globalData = {};

fetch("data.json")
.then(res => res.json())
.then(data => {
    globalData = data;

    document.getElementById("job").innerText = data.job;
    document.getElementById("tagline").innerText = data.tagline;

    renderProblems();
    renderSolutions();
    renderServices();
});

function renderProblems() {
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

function renderSolutions() {
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

function renderServices() {
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
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(2,6,23,0.95)";
    } else {
        navbar.style.background = "rgba(2,6,23,0.7)";
    }
});
