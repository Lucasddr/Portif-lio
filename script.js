const sectionSobre = document.querySelector("#sobre");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skills = sectionSobre.querySelectorAll(".skill");

      skills.forEach(skill => {
        const percent = skill.dataset.percent / 100;
        const progress = skill.querySelector(".progress");
        const value = skill.querySelector(".progress-value");

        // ativa a barra
        progress.style.setProperty("--scale", percent);
        skill.classList.add("active");

        // animação de contagem usando requestAnimationFrame
        const target = parseInt(skill.dataset.percent);
        let start = null;

        function animate(timestamp) {
          if (!start) start = timestamp;
          const elapsed = timestamp - start;

          // define duração da animação em ms
          const duration = 2000; // 2 segundos
          const progressPercent = Math.min((elapsed / duration) * target, target);

          value.textContent = Math.round(progressPercent) + "%";

          if (progressPercent < target) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
      });

      observer.unobserve(sectionSobre);
    }
  });
}, { threshold: 0.5 });

observer.observe(sectionSobre);
