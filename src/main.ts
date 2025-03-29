import "./style.css";

function main() {
  const tabButtons = document.querySelectorAll(".buttons button");
  const tabContents = document.querySelectorAll(".tab-content .tab");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((button) => button.classList.remove("active"));
      tabContents.forEach((tab) => tab.classList.remove("active"));

      button.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", main);
