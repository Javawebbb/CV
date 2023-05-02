const form = document.getElementById('contact');
const modal = document.getElementById('my-modal');
const closeBtn = document.querySelector('.close');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Отменить действие по умолчанию (отправку формы)
  modal.style.display = 'block'; // Показать модальное окно
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none'; // Скрыть модальное окно при нажатии на "x"
});

window.addEventListener('click', function(e) {
  if (e.target == modal) {
    modal.style.display = 'none'; // Скрыть модальное окно при клике вне его
  }
});

