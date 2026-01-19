const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

//Animação das nav-links

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  { threshold: 0.4 },
);

sections.forEach((section) => observer2.observe(section));

//Animação typing da hero

const textElement = document.querySelector(".typing-text");
const texts = ["Full Stack", "Frontend", "Backend"];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex--);
  } else {
    textElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    speed = 100;
    setTimeout(typeEffect, 1000);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 200;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

//Animação da seção sobre

const aboutAnimation = document.querySelectorAll(".about-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.35 },
);

aboutAnimation.forEach((section) => observer.observe(section));

