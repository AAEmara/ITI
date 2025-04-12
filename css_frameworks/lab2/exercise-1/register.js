import * as cookies from "./cookies.js";

/*
 * Users' attributes are saved in cookie form.
 * The following cookie attributes are for the current user:
 *   - user=1 // starts from 1
 *   - name_1=user
 *   - age_1=15
 *   - gender_1=male
 *   - color_1=red
 *   - visits_1=2 // initialized to 1 after registration.
 *
 * A general attribute to be used, where it follows the total users count:
 *   - usersCount=5
 *
 * Notes:
 *   - each visit increases by 1 for every refresh or new registration
 **/

// Updates the total user counts inside the cookiesCount cookie.
function updateUsersCount() {
  const currentUsersCount = cookies.getCookieValue("usersCount");
  const newUsersCount = currentUsersCount ? parseInt(currentUsersCount) + 1 : 1;
  cookies.updateCookie("usersCount", newUsersCount);

  return newUsersCount;
}

// Update user's cookie values.
function updateUserValues(userCookiesObject) {
  for (const cookieName in userCookiesObject) {
    cookies.updateCookie(cookieName, userCookiesObject[cookieName]);
  }
}

document.getElementById("register").addEventListener("click", () => {
  // Getting the values of the data to be registered.
  const userName = document.getElementById("name").value;
  const userAge = document.getElementById("age").value;
  const userGender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  const userColor = document.querySelector("select").value.toLowerCase();

  // Searching if the name is used before or not (aka registered or not registered).
  const isUserRegistered = cookies.isCookieAvailable(userName);
  if (!isUserRegistered) {
    const newUsersCount = updateUsersCount(); // increasing the total users count
    const newUserIdCookie = `${userName}=${newUsersCount}`;
    const newUserCookie = `name_${newUsersCount}=${userName}`;

    cookies.setCookie(newUserIdCookie); // created a user=id cookie
    cookies.setCookie(newUserCookie); // created a name_1=user cookie
  }

  const userId = cookies.getCookieValue(userName);
  const ageCookieName = `age_${userId}`;
  const genderCookieName = `gender_${userId}`;
  const colorCookieName = `color_${userId}`;

  let cookieObject = {};
  cookieObject[ageCookieName] = userAge;
  cookieObject[genderCookieName] = userGender;
  cookieObject[colorCookieName] = userColor;

  updateUserValues(cookieObject);
  cookies.updateCookie("currentUser", userId);
});
