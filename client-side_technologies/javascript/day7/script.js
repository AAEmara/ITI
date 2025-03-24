let userName = localStorage.getItem("name");
let color = localStorage.getItem("color");

function greetUser(userName) {
  let greetMessage = "Hello!";
  if (!userName) {
    document.getElementById("greeting").innerHTML = greetMessage;
    return greetMessage;
  }
  greetMessage = `Hello, ${userName}!`;
  document.getElementById("greeting").innerHTML = greetMessage;
  return greetMessage;
}

function updateUser() {
  document.getElementById("namebtn").addEventListener("click", () => {
    const newUserName = prompt("Please, Enter your Name.");

    if (newUserName) {
      localStorage.setItem("name", newUserName);
      greetUser(newUserName);
    }
  });
}

function updateColor(color) {
  document.getElementById("color").addEventListener("input", () => {
    const newColor = document.getElementById("color").value;
    localStorage.setItem("color", newColor);
    document.getElementById("greeting").style.color = newColor;
  });
}

console.log(navigator.userAgent);
console.log(`Screen's Width x Height: ${screen.width} x ${screen.height}`);

setTimeout(() => {
  alert(greetUser(userName));
}, 2000);

if (userName) {
  document.getElementById("greeting").innerHTML = `Hello, ${userName}!`;
}

if (color) {
  document.getElementById("greeting").style.color = color;
}

updateUser();
updateColor(color);

document.getElementById("clearbtn").addEventListener("click", () => {
  const removedUserName = localStorage.removeItem("name");
  greetUser();
});
