function activateSpectrum() {
  document.querySelector('#toggle-button').addEventListener('click', function() {
    document.querySelector('.spectrum-col.collapsible').classList.toggle('collapsed');
  });
}
