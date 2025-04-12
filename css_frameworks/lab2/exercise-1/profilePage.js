import * as cookies from "./cookies.js";

const currentUser = cookies.getCookieValue("currentUser");

updateUsersVisits(currentUser);

const img = document.createElement("img");

const gender = cookies.getCookieValue(`gender_${currentUser}`);
const color = cookies.getCookieValue(`color_${currentUser}`);
const name = cookies.getCookieValue(`name_${currentUser}`);
const visits = cookies.getCookieValue(`visits_${currentUser}`);
let imageSource = `./assets/images/${gender}.jpg`;

const div = document.createElement("div");
div.id = "profile-container";
document.body.appendChild(div);

img.src = imageSource;
div.appendChild(img);

const p = document.createElement("p");
p.innerHTML = `<b>Weclome <span id="name">${name}</span></b> you Have visited this site <span id="visits"><b>${visits}</b></span> times :)`;
div.appendChild(p);

document.getElementById("name").style.color = color;
document.getElementById("visits").style.color = color;

// Updates the total user visits count inside the `visits${userId}` cookie.
function updateUsersVisits(currentUserID) {
  const visitsCookieName = `visits_${currentUserID}`;
  const currentUserVisits = cookies.getCookieValue(visitsCookieName);
  const newUserVisits = currentUserVisits ? parseInt(currentUserVisits) + 1 : 1;
  cookies.updateCookie(visitsCookieName, newUserVisits);

  return newUserVisits;
}
