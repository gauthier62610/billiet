/* ============================================================================
   BILLIET MENUISERIE — Scripts communs
   - Menu de navigation mobile (ouverture/fermeture)
   - Mise en surbrillance du lien de la page courante
   - Validation + retour visuel du formulaire de contact (front only)
   ========================================================================== */
(function () {
  'use strict';

  /* --- 1. Menu mobile --------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Ferme le menu quand on clique sur un lien (mobile)
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- 2. Lien actif : basé sur le nom de fichier ----------------------- */
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  /* --- 3. Formulaire de contact ---------------------------------------- */
  /* NOTE : envoi non connecté à un backend pour l'instant.
     >>> À BRANCHER plus tard (service email / API). Voir CLAUDE.md. <<< */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var success = document.querySelector('#form-success');
      if (success) { success.classList.add('is-visible'); }
      form.reset();
    });
  }
})();
