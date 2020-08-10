const aboutDiv = document.querySelector(".aboutdiv");
const mq = window.matchMedia("(max-width: 570px)");
if (mq.matches) {
  aboutDiv.classList.add("align-self-center");
}

const btnwebdev = document.getElementById("btnwebdev");
const btnteacher = document.getElementById("btnteacher");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const sendbtn = document.getElementById("sendbtn");
const mybtn = document.getElementById("mybtn");

btnwebdev.addEventListener("click", function () {
  radio1.checked = true;
  radio2.checked = false;
});

btnteacher.addEventListener("click", function () {
  radio2.checked = true;
  radio1.checked = false;
});

sendbtn.addEventListener("click", function () {
  alert("Thankyou for Contact Me");
});

mybtn.addEventListener("mouseover", function () {
  this.innerHTML = "Myhanz.site";
});

mybtn.addEventListener("mouseout", function () {
  this.innerHTML = "See My Other Site";
});
