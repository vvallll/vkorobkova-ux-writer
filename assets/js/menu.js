/* Меню в шапке на телефоне: кнопка открывает и закрывает список разделов и переключатель языка. */
(function () {
  var header = document.querySelector('.header');
  var button = header && header.querySelector('.header__burger');
  if (!button) return;
  function setOpen(open) {
    header.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.setAttribute('aria-label', open ? button.dataset.close : button.dataset.open);
  }
  button.addEventListener('click', function () { setOpen(!header.classList.contains('is-open')); });
  header.querySelectorAll('.header__menu a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();
