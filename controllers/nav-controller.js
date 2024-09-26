const btnNav = document.getElementById('btn-toggle-nav')
const nav = document.getElementById('nav-menu')

btnNav.addEventListener('click', () => {
    if (nav.style.display === "flex") {
        nav.classList.remove('animate')
        nav.classList.add('no-animate')
        setTimeout(() => {
            nav.style.display = "none"
        }, 200);
    } else {
        nav.style.display = "flex"
        nav.classList.remove('no-animate')
        nav.classList.add('animate')
    }
})