// Sets a new cookie and returns the updated cookie.
export function setCookie(cookieString) {
  document.cookie = cookieString;
  return document.cookie;
}

// Retrieves all the available cookies.
export function getAllCookies() {
  const cookiesArray = document.cookie.split("; ");
  let cookiesObject = {};
  for (const cookie of cookiesArray) {
    let [key, value] = cookie.split("=");
    cookiesObject[key] = value;
  }
  return cookiesObject;
}

// Retrieves a certain cookie.
export function getCookieValue(cookieName) {
  const cookiesObject = getAllCookies();
  return cookiesObject[cookieName];
}

export function isCookieAvailable(cookieValue) {
  const cookiesObject = getAllCookies();
  for (const cookieName in cookiesObject) {
    if (cookiesObject[cookieName] === cookieValue) {
      return true;
    }
  }
  return false;
}

// Updates a cookie.
export function updateCookie(cookieName, cookieValue) {
  return (document.cookie = `${cookieName}=${cookieValue}`);
}

// Deletes a cookie.
export function deleteCookie(cookieName, cookieValue) {
  document.cookie = `${cookieName}=${cookieValue}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  return document.cookie;
}

// Resets the cookie value.
export function resetCookie() {
  document.cookie = "name=user; gender=unkown";
  return document.cookie;
}
