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

//Animação da seção sobre e navlinks

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const aboutAnimation = document.querySelectorAll(".container");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });

    const visibleSections = entries
      .filter((e) => e.isIntersecting && e.target.tagName === "SECTION" && e.target.id);

    if (visibleSections.length === 0) return;

    const topSection = visibleSections.sort(
      (a, b) => b.intersectionRatio - a.intersectionRatio
    )[0].target;

    navLinks.forEach((link) => link.classList.remove("active"));

    const activeLink = document.querySelector(`.nav-link[href="#${topSection.id}"]`);
    activeLink?.classList.add("active");
  },
  { threshold: 0.1 }
);

sections.forEach((s) => observer.observe(s));
aboutAnimation.forEach((c) => observer.observe(c));