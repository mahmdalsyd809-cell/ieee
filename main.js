let barIcon = document.getElementById("bar");

let list = document.getElementById("list");
let num = 0;
function data() {
  num += 1;
}
barIcon.addEventListener("click", () => {
  if (num % 2) list.style.transform = "translateX(0)";
  else {
    list.style.transform = "translateX(-100%)";
  }
});
