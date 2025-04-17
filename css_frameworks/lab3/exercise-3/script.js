const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.fillStyle = "red";
context.beginPath();
context.moveTo(100, 250);
context.lineTo(250, 250);
context.lineTo(250, 50);
context.closePath();
context.fill();

context.font = "16px serif";
context.fillStyle = "black";
context.fillText("c", 150, 150);

context.font = "16px serif";
context.fillStyle = "black";
context.fillText("b", 255, 150);

context.font = "16px serif";
context.fillStyle = "black";
context.fillText("a", 175, 270);

context.font = "bold 30px times";
context.fillStyle = "black";
context.fillText("according to pythagoras theorem", 10, 320);
