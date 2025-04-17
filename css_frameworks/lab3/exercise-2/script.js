const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let gradient = context.createRadialGradient(230, 5, 500, 10, 310, 50);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "royalblue");

context.fillStyle = gradient;
context.beginPath();
context.arc(210, 210, 200, 0, 2 * Math.PI);
context.fill();

gradient = context.createRadialGradient(300, 300, 150, 350, 350, 20);
gradient.addColorStop(1, "white");
gradient.addColorStop(0, "royalblue");

context.fillStyle = gradient;
context.beginPath();
context.arc(210, 210, 150, 0, 2 * Math.PI);
context.fill();

context.font = "280px sans";
context.fillStyle = "white";
context.fillText("N", 100, 300);
