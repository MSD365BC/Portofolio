const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

function openModal(type) {

    modal.style.display = "block";

    if(type === "about"){
        modalBody.innerHTML = `
        <h2>About Me</h2>
        <p>Power BI Developer with expertise in analytics, SQL, and Python.</p>
        `;
    }

    if(type === "projects"){
        modalBody.innerHTML = `
        <h2>Projects</h2>

        <div class="card">
            <h3>Sales Dashboard</h3>
            <p>Revenue & KPI Analysis</p>
        </div>

        <div class="card">
            <h3>Inventory Analytics</h3>
            <p>Stock aging & movement</p>
        </div>

        <div class="card">
            <h3>Business Reporting</h3>
            <p>Automation reporting system</p>
        </div>
        `;
    }

    if(type === "dashboard"){
        modalBody.innerHTML = `
        <h2>Live Dashboard</h2>
        <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMjcyZjJhMjEtOGNlNi00ZDQ4LWI0ZjgtNzc2NzAwMWI0ZDEzIiwidCI6IjM0YWFmOGI2LTdkNjMtNGU3NS1hNjBjLWE3NWYxMzE1NGY1MiIsImMiOjEwfQ%3D%3D"></iframe>
        `;
    }

    if(type === "contact"){
        modalBody.innerHTML = `
        <h2>Contact</h2>
        <p>Email: suroso559@yahoo.com</p>
        <p>WhatsApp: 08118481208</p>
        `;
    }
}

/* CLOSE */
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e)=>{
    if(e.target == modal){
        modal.style.display = "none";
    }
};
