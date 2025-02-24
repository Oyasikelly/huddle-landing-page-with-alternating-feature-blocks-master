// Add mobile menu functionality
const tryFreeButton = document.querySelector(".try-free");
tryFreeButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".cta-section").offsetTop,
    behavior: "smooth",
  });
});
