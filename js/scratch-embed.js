/**
 * Scratch project embed - opens modal with playable Scratch iframe when project card is clicked.
 */
(function() {
  var SCRATCH_EMBED = 'https://scratch.mit.edu/projects/1279498993/embed/';
  var card = document.getElementById('scratch-project-card');
  var modal = document.getElementById('scratch-modal');
  var iframe = document.getElementById('scratch-iframe');
  var backdrop = document.getElementById('scratch-modal-backdrop');
  var closeBtn = document.getElementById('scratch-modal-close');

  function openModal() {
    iframe.src = SCRATCH_EMBED;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    iframe.src = 'about:blank';
  }

  if (card) {
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
})();
