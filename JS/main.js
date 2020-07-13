const projectsCards = document.querySelectorAll(".project");

projectsCards.forEach((project) => {
  project.addEventListener("mouseenter", changeOpacity);
  project.addEventListener("mouseleave", changeOpacity);
});

function changeOpacity(e) {
  projectsCards.forEach((element) => {
    element.classList.toggle("low-opacity");
  });
  e.target.classList.toggle("low-opacity");
}
