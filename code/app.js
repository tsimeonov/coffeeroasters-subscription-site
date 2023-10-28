// Mobile menu
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
