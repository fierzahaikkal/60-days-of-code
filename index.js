const mobile_btn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobile_btn_exit = document.getElementById("exit-cta");

mobile_btn.addEventListener("click", () => {
  nav.classList.add("mobile-btn");
});

mobile_btn_exit.addEventListener("click", () => {
  nav.classList.remove("mobile-btn");
});
