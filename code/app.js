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

// FAQ SECTION
const faqs = document.querySelectorAll(".faq");
const createPlanDivOne = document.querySelector(
  ".create-plan-nav > div:nth-of-type(1)"
);

const faqOne = document.querySelector(
  ".create-plan-dropdown > div:nth-of-type(1)"
);

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

createPlanDivOne.addEventListener("click", () => {
  faqOne.classList.toggle("active");
});
