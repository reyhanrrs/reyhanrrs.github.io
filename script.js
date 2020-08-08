const aboutDiv = document.querySelector(".aboutdiv");
const mq = window.matchMedia("(max-width: 570px)");
if (mq.matches) {
  aboutDiv.classList.add("align-self-center");
}
