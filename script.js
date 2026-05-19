let DATA = {};

/* LOAD JSON */
fetch("data.json")
    .then(res => res.json())
    .then(data => {
        DATA = data;
    });

function openModal(type) {

    modal.style.display = "block";

    if(type === "about"){
        modalBody.innerHTML = `
            <h2>${DATA.about.title}</h2>
            <p>${DATA.about.desc}</p>
        `;
    }

    if(type === "projects"){
        let html = `<h2>Projects</h2>`;
        
        DATA.projects.forEach(p => {
            html += `
            <div class="card">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>`;
        });

        modalBody.innerHTML = html;
    }

    if(type === "contact"){
        modalBody.innerHTML = `
            <h2>Contact</h2>
            <p>Email: ${DATA.contact.email}</p>
            <p>WA: ${DATA.contact.wa}</p>
        `;
    }
}
