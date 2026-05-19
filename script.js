let config = {};

// LOAD CONFIG
fetch('config.json')
.then(res => res.json())
.then(data => {
  config = data;
});

// ===== CONTACT MODAL =====
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");

contactBtn.onclick = () => {
  contactModal.style.display = "block";
};

// ===== CLOSE MODAL =====
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
  if (e.target === imgModal) {
    imgModal.style.display = "none";
  }
});

// ===== WHATSAPP =====
const startBtn = document.getElementById("startProject");

startBtn.onclick = () => {
  const url = `https://wa.me/${config.phone}?text=${encodeURIComponent(config.message)}`;
  window.open(url, "_blank");
};

// ===== IMAGE ZOOM =====
const images = document.querySelectorAll(".zoom");
const imgModal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

images.forEach(img => {
  img.onclick = () => {
    imgModal.style.display = "block";
    modalImg.src = img.src;
  };
});

// CLOSE BUTTON
document.querySelector(".close").onclick = () => {
  imgModal.style.display = "none";
};

// ===== SMOOTH SCROLL =====
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
