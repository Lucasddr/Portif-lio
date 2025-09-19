const progress = document.querySelector('.skill');
const progressValue = document.querySelector('.progress-value');
const targetPercent = 10; 
const duration = 3000; 
let start = null;

function animate(timestamp) {
  if (!start) start = timestamp;
  const elapsed = timestamp - start;
  const progressPercent = Math.min((elapsed / duration) * targetPercent, targetPercent);

  progress.style.width = progressPercent + '%';
  progressValue.textContent = Math.floor(progressPercent) + '%';

  if (elapsed < duration) {
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);
