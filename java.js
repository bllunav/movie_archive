function showMenu(id) {
var element = document.getElementById("hamMenu");

  if (element) {
    var display = element.style.display;

    if (display == "none") {
        element.style.display = "flex";
    }
    else {
        element.style.display = "none";
    }
  }
}