const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      activeLink.classList.add("active");
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer3.observe(section));

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

const aboutAnimation = document.querySelectorAll(".about-container");

const observer = new IntersectionObserver((entries) =>{
  entries.forEach(entry => { 
    if(entry .isIntersecting){
      entry.target.classList.add("active");
    } else{
      entry.target.classList.remove("active");
    }

  });
}, {threshold: 0.5});


aboutAnimation.forEach(section => observer.observe(section));


const sectionSobre = document.querySelector("#about");

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skills = sectionSobre.querySelectorAll(".skill");

      skills.forEach(skill => {
        const percent = skill.dataset.percent / 100;
        const progress = skill.querySelector(".progress");
        const value = skill.querySelector(".progress-value");

        progress.style.setProperty("--scale", percent);
        skill.classList.add("active");

        const target = parseInt(skill.dataset.percent);
        let start = null;

        function animate(timestamp) {
          if (!start) start = timestamp;
          const elapsed = timestamp - start;

          const duration = 2000;
          const progressPercent = Math.min((elapsed / duration) * target, target);

          value.textContent = Math.round(progressPercent) + "%";

          if (progressPercent < target) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
      });

    } else {
     
      const skills = sectionSobre.querySelectorAll(".skill");
      skills.forEach(skill => {
        const progress = skill.querySelector(".progress");
        const value = skill.querySelector(".progress-value");

        progress.style.setProperty("--scale", 0);
        skill.classList.remove("active");
        value.textContent = "0%"; 
      });
    }
  });
}, { threshold: 0.5 });

observer2.observe(sectionSobre);

const navLink = document.querySelector(".nav-link");


