const logo = document.querySelector('.gigiLogo');
const flower = document.querySelectorAll('.flower');
const navBar = document.querySelector('nav')
const about = document.querySelector(".about");

const anim = [
  { opacity: 0 },
  { opacity: 1 }
];

const animOptions = {
  duration: 1500,
  delay: 1500,
  fill: 'forwards',
  easing: 'ease-in-out',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hidden");
    }
  });
}, {
  root: null,
  rootMargin: "-20% 0px",
  threshold: 0
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

const obsFade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn");
      entry.target.classList.remove("fadeOut");
    } else {
      entry.target.classList.remove("fadeIn");
      entry.target.classList.add("fadeOut");
    }
  });
}, {
  root: null,
  rootMargin: "-25% 0px",
  threshold: 0
});

const fadeElement = document.querySelectorAll("span");

fadeElement.forEach((el) => obsFade.observe(el));

document.addEventListener('scroll', () => {
  logo.classList.add('logoScroll');
  flower.forEach((element) => element.classList.add('flowerScroll'));
  navBar.animate(anim, animOptions);
  about.animate(anim, animOptions);
}, { once: true })