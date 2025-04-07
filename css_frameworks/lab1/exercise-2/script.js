const title = document.getElementById("title");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
let redValue = red.value;
let greenValue = green.value;
let blueValue = blue.value;

function redChange() {
  red.addEventListener("input", () => {
    redValue = red.value;
    title.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  });
}

function greenChange() {
  green.addEventListener("input", () => {
    greenValue = green.value;
    title.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  });
}

function blueChange() {
  blue.addEventListener("input", () => {
    blueValue = blue.value;
    title.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  });
}

function initializeTitleColor() {
  title.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function titleColorChange() {
  initializeTitleColor();
  redChange();
  greenChange();
  blueChange();
}

titleColorChange();
