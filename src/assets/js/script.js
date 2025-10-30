const hamburger = document.querySelector("#hamburger");
const navMobile = document.querySelector("#nav-mobile");

hamburger.addEventListener("click", function () {
  // hamburger.classList.toggle("hamburger-active");
  console.log("klik");
  navMobile.classList.toggle("hidden");
});
