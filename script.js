document.addEventListener("click", (e) => {
  const dropdownButton = document.querySelector(".dropdown-button");
  const isDropdownButton = e.target === dropdownButton;
  if (!isDropdownButton && e.target.closest("[data-dropdown]") !== null) return;

  const dropDown = document.querySelector(".dropdown-menu");
  if (isDropdownButton) {
    dropDown.classList.toggle("active");
  } else {
    dropDown.classList.remove("active");
  }
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 500) {
    const dropDown = document.querySelector(".dropdown-menu");
    dropDown.classList.remove("active");
  }
});
