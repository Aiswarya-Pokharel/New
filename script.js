let menuOpen = document.querySelector("#menu-open");
menuOpen.addEventListener("click", () => {
  document.body.classList.toggle("show-menu");
});
let menuClose = document.querySelector("#menu-close");
menuClose.addEventListener("click", () => menuOpen.click());
