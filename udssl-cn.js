var cookieAccept = document.getElementsByClassName('cookie-button')[0];
var cookieDeny = document.getElementsByClassName('cookie-button')[1];
var cookieClose = document.getElementsByClassName('cookie-button')[2];

cookieBanner = document.getElementsByClassName('cookie-banner')[0];

// set coockie consent true and remove the HTML banner
cookieAccept.addEventListener('click', function () {
  var cookieData = 'CookieConsent=true; path=/; expires=';
  var date = new Date();
  var expirationDate = date.getTime() + 31536000000;

  date.setTime(expirationDate);
  cookieData += date.toUTCString();
  document.cookie = cookieData;

  // fades out cookie banner
  cookieBanner.classList.add('cookie-fade');
});

// set coockie consent false and remove the HTML banner
cookieDeny.addEventListener('click', function () {
  var cookieData = 'CookieConsent=false; path=/; expires=';
  var date = new Date();
  var expirationDate = date.getTime() + 31536000000;

  date.setTime(expirationDate);
  cookieData += date.toUTCString();
  document.cookie = cookieData;

  // fades out cookie banner
  cookieBanner.classList.add('cookie-fade');
});

// not setting coockie consent; just remove the HTML banner
cookieClose.addEventListener('click', function () {
  // fades out cookie banner
  cookieBanner.classList.add('cookie-fade');
});

// checks to see if cookie is has been set and if so keeps the banner hidden
if (
  document.cookie.split(';').filter(function (item) {
    return item.trim().indexOf('CookieConsent=') == 0;
  }).length
) {
  // prevents cookie notice showing on next visit
  cookieBanner.classList.add('hidden');
}
