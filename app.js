



const artwork = document.querySelector('.hero-art');
const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (artwork && motionOK && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let frame;
  artwork.addEventListener('pointermove', (event) => {
    const bounds = artwork.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2);
    const y = (event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2);
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      artwork.style.transform = `rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg)`;
      artwork.style.setProperty('--light-x', `${((x + 1) * 50).toFixed(1)}%`);
      artwork.style.setProperty('--light-y', `${((y + 1) * 50).toFixed(1)}%`);
    });
  });
  artwork.addEventListener('pointerleave', () => {
    artwork.style.transform = 'rotateX(0deg) rotateY(0deg)';
    artwork.style.setProperty('--light-x', '50%');
    artwork.style.setProperty('--light-y', '50%');
  });
}

