var prevScrollpos = window.pageYOffset;
let header = document.querySelector(".header");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.remove('hide');
  } else {
    header.classList.add('hide');
  }
  prevScrollpos = currentScrollPos;
};

 