const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= navTop) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
  } else {
    nav.style.position = 'relative';
    nav.style.top = 'auto';
  }
});