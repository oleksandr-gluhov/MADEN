const burgerMenu = document.querySelector('.bmenu img');
const menuItems = document.querySelector('.b_menu_list');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', function (e) {
    e.stopPropagation(); // Зупиняємо подальше поширення події
    this.classList.toggle('active');
    menuItems.classList.toggle('active');
});

body.addEventListener('click', function () {
    burgerMenu.classList.remove('active');
    menuItems.classList.remove('active');
});
