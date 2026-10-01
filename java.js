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

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
