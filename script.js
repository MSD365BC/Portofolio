let globalData = {};

fetch("data.json")
.then(res => res.json())
.then(data => {
    globalData = data;

    document.getElementById("job").innerText = data.job;
    document.getElementById("tagline").innerText = data.tagline;
    document.getElementById("waLink").href = data.whatsapp;

    // Highlights
    let highlightHTML = "";
    data.highlights.forEach(h => {
        highlightHTML += `
            <div class="card">
                <h3>${h.title}</h3>
                <p>${h.desc}</p>
            </div>
        `;
    });

    document.getElementById("highlights").innerHTML = highlightHTML;
});

/* MODAL SYSTEM */
function openModal(type) {
    const modal = document.getElementById("modal");
    const body = document.getElementById("modal-body");

    if(type === "about"){
        body.innerHTML = `<h2>About Me</h2><p>${globalData.about}</p>`;
    }

    if(type === "projects"){
        let html = "<h2>Projects</h2>";
        globalData.projects.forEach(p => {
            html += `<div class="card">
                        <h3>${p.title}</h3>
                        <p>${p.desc}</p>
                    </div>`;
        });
        body.innerHTML = html;
    }

    if(type === "dashboard"){
        body.innerHTML = `
            <h2>Power BI Dashboard</h2>
            <iframe src="${globalData.dashboard}" width="100%" height="400"></iframe>
        `;
    }

    if(type === "contact"){
        body.innerHTML = `
            <h2>Contact</h2>
            <p>Email: ${globalData.email}</p>
            <a href="${globalData.whatsapp}" class="btn">Chat WhatsApp</a>
        `;
    }

    modal.style.display = "block";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}
