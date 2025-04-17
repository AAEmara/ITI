const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.rect(10, 10, 700, 500);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

// context.rect(50, 40, 450, 175);
let gradient = context.createLinearGradient(50, 40, 50, 215);
gradient.addColorStop(0, "deepskyblue");
gradient.addColorStop(1, "white");
context.fillStyle = gradient;

context.fillRect(50, 40, 650, 175);

gradient = context.createLinearGradient(50, 215, 50, 390);
gradient.addColorStop(0, "yellowgreen");
gradient.addColorStop(0.5, "yellowgreen");
gradient.addColorStop(1, "white");
context.fillStyle = gradient;
context.fillRect(50, 215, 650, 175);

context.beginPath();
context.moveTo(266.6, 127.5);
context.lineTo(483.2, 127.5);
context.lineWidth = 2;
context.stroke();

context.beginPath();
context.moveTo(266.6, 127.5);
context.lineTo(266.6, 215);
context.moveTo(483.2, 127.5);
context.lineTo(483.2, 215);
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(266.6, 215);
context.lineTo(266.6, 302.5);
context.moveTo(483.2, 215);
context.lineTo(483.2, 302.5);
context.strokeStyle = context.createLinearGradient(200, 215, 200, 302.5);
context.strokeStyle.addColorStop(0, "black");
context.strokeStyle.addColorStop(1, "yellowgreen");

context.stroke();
// context.fillStyle = "green";
// context.fillRect(10, 10, 100, 100);
