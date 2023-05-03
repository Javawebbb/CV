let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

const form = document.getElementById('contact');
const modal = document.getElementById('my-modal');
const closeBtn = document.querySelector('.close');
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute ('id')
    
    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
    };
  });
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

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


