const navbarToggler = document.querySelector('.navbar__top--toggler');
const navbarCollapse = document.querySelector('.navbar__collapse');

navbarToggler.addEventListener('click',function () {
    navbarToggler.classList.toggle('change')
    navbarToggler.classList.toggle('show_nav')
})