document.querySelectorAll('.trait').forEach(trait => {
  trait.addEventListener('click', function (e) {
      e.preventDefault();
      const fullscreen = document.getElementById('fullscreen');
      const title = document.getElementById('fullscreen-title');
      const info = document.getElementById('fullscreen-info');

      title.textContent = this.querySelector('h2').textContent;
      info.innerHTML = this.getAttribute('data-info');

      fullscreen.style.display = 'block';
  });
});

document.querySelector('.close-btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('fullscreen').style.display = 'none';
});