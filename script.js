const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function openModal(type) {
    modal.style.display = "block";

    if(type === "about") {
        modalBody.innerHTML = `
            <h2>About Me</h2>
            <p>Power BI Developer specializing in analytics systems, dashboards, and automation using SQL & Python.</p>
        `;
    }

    if(type === "projects") {
        modalBody.innerHTML = `
            <h2>Projects</h2>
            <ul>
                <li>📊 Sales Dashboard</li>
                <li>📦 Inventory Analytics</li>
                <li>📈 Business Reporting Automation</li>
            </ul>
        `;
    }

    if(type === "dashboard") {
        modalBody.innerHTML = `
            <h2>Live Dashboard</h2>
            <iframe width="100%" height="400"
            src="https://app.powerbi.com/view?r=eyJrIjoiMjcyZjJhMjEtOGNlNi00ZDQ4LWI0ZjgtNzc2NzAwMWI0ZDEzIiwidCI6IjM0YWFmOGI2LTdkNjMtNGU3NS1hNjBjLWE3NWYxMzE1NGY1MiIsImMiOjEwfQ%3D%3D"
            frameborder="0"></iframe>
        `;
    }

    if(type === "contact") {
        modalBody.innerHTML = `
            <h2>Contact</h2>
            <p>Email: suroso559@yahoo.com</p>
            <p>WhatsApp: 0811-8481-208</p>
        `;
    }
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
