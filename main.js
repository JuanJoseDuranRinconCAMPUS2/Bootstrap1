const toggle = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})