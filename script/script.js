showMenu = function () {
  var menuStatus = document.getElementById("mobile-menu").style.display;
  console.log(menuStatus);
  if (menuStatus == "block") {
    document.getElementById("mobile-menu").style.display = "none";
  }
  else {
    document.getElementById("mobile-menu").style.display = "block";
  }
}