setInterval(setday, 1000);
var countdown = new Date(2024, 1, 1).getTime();
function setday() {
  var now = new Date().getTime();
  var distance = countdown - now;
  var dayleft = document.querySelector(".count");
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / 1000);
  dayleft.innerHTML =
    days + "d   " + hour + "h " + minute + "m " + second + "s ";
}
