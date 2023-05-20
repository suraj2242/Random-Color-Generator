let range = "01234567890ABCDEF";

function colorChanger() {
  let newColor = "#";
  for (i = 0; i < 6; i++) {
    newColor = newColor + range[Math.floor(Math.random() * 16)];
  }
  document.querySelector("body").style.backgroundColor = newColor;
}

let btn = document.querySelector("button");
btn.addEventListener("click", colorChanger);
