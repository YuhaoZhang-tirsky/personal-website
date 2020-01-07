/**check if the page has been resize*/
window.onresize = function(e) {
  var width = window.innerWidth;
  if (width > 991) {
    document.getElementById("mobile-menu").style.display = "block";
  } else {
    document.getElementById("mobile-menu").style.display = "none";
  }
}
/**change menu visibility in mobile view. */
showMenu = function () {
  var menuStatus = document.getElementById("mobile-menu").style.display;
  if (menuStatus == "block") {
    document.getElementById("mobile-menu").style.display = "none";
  }
  else {
    document.getElementById("mobile-menu").style.display = "block";
  }
}

