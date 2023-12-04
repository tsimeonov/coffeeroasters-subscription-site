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
// const faqs = document.querySelectorAll(".faq");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("active");
//   });
// });

const faqTitles = document.querySelectorAll(".question h3");
faqTitles.forEach((title) => {
  title.addEventListener("click", () => {
    title.style.outline = "1px solid red";
  });
});

const createPlanDivs = document.querySelectorAll(".create-plan-nav > div");
const faqsEx = document.querySelectorAll(".create-plan-dropdown > div");

createPlanDivs.forEach((createPlanDiv, index) => {
  createPlanDiv.addEventListener("click", () => {
    faqsEx[index].classList.toggle("active");
  });
});
