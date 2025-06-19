const logo = document.querySelector('.gigiLogo');
const flower = document.querySelectorAll('.flower');
const navBar = document.querySelector('nav')

document.addEventListener('scroll', () => {
  logo.classList.add('logoScroll');
  flower.forEach((element) => element.classList.add('flowerScroll'));
  navBar.classList.add('navScroll');
}, { once: true })