fetch("data.json")
.then(res => res.json())
.then(data => {

    document.querySelector(".hero h1").innerText = data.job;
    document.querySelector("#about p").innerText = data.about;

    let projectHTML = "";
    data.projects.forEach(p => {
        projectHTML += `
            <div class="card">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        `;
    });

    document.querySelector(".grid").innerHTML = projectHTML;
});
