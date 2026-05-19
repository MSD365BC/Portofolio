// LOAD JSON DATA
fetch("data.json")
  .then(res => res.json())
  .then(data => {

    // ======================
    // PROBLEMS
    // ======================
    const problemContainer = document.getElementById("problems");

    data.problems.forEach(item => {
      problemContainer.innerHTML += `
        <div class="card">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;
    });


    // ======================
    // SOLUTIONS
    // ======================
    const solutionContainer = document.getElementById("solutions");

    data.solutions.forEach(item => {
      solutionContainer.innerHTML += `
        <div class="card">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;
    });


    // ======================
    // SERVICES
    // ======================
    const serviceContainer = document.getElementById("services-list");

    data.services.forEach(item => {
      serviceContainer.innerHTML += `
        <div class="card">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <h4>${item.price}</h4>
          <button class="btn">${item.cta || "Get Started"}</button>
        </div>
      `;
    });


    // ======================
    // TYPING HERO
    // ======================
    new Typed("#typing", {
      strings: [
        "increase profit",
        "reduce cost",
        "automate reporting",
        "make faster decisions"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

  })
  .catch(err => console.error("Error load JSON:", err));


// ======================
// SCROLL REVEAL (ANIMASI)
// ======================
ScrollReveal().reveal('.card', {
  delay: 200,
  distance: '40px',
  origin: 'bottom',
  interval: 100
});
