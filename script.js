// Diario de Ingeniería — comportamiento
document.addEventListener('DOMContentLoaded', () => {
  const stories = Array.from(document.querySelectorAll('.story'));
  const expandBtn = document.getElementById('expand-all');
  const collapseBtn = document.getElementById('collapse-all');

  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      stories.forEach(s => s.open = true);
    });
  }
  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      stories.forEach(s => s.open = false);
    });
  }

  // Abre automáticamente el tema indicado
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target && target.classList.contains('story')) {
      target.open = true;
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    }
  }
});
