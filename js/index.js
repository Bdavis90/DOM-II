// Your code goes here

const navLinks = document.querySelectorAll('.nav-link');
navLinks[0].addEventListener('click', (e) => e.preventDefault())
navLinks[1].addEventListener('click', (e) => e.preventDefault())
navLinks[2].addEventListener('click', (e) => e.preventDefault())
navLinks[3].addEventListener('click', (e) => e.preventDefault())


const intro = document.querySelector('.intro');
intro.addEventListener('mouseenter', (e) => {
    intro.style.border = '2px solid blue'
})

intro.addEventListener('mouseleave', () => {
    intro.style.border = ''
})

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);
    if (Math.floor(scrolled) === 1016)
    alert ('You\'ve reached the bottom!')
})

window.addEventListener('keydown', (e) => console.log(e.code))

const headerLogo = document.querySelector('.logo-heading');
headerLogo.addEventListener('wheel', () => {
    headerLogo.style.color = 'yellow'
    headerLogo.style.fontSize = '80px'
})


const destination = document.querySelector('.content-pick');

destination.addEventListener('click', (e) => destination.style.backgroundColor = 'red');

const button = document.querySelectorAll('.btn');

button[0].addEventListener('click', (e) => {
    button[0].textContent = "DON'T PRESS ME!";
    e.stopPropagation();
});

button[1].addEventListener('mouseover', () => button[1].textContent = 'DON\'T TOUCH ME');

button[2].addEventListener('dblclick', (e) => {
    button[2].textContent = 'LEAVE US ALONE!'
    // e.stopPropagation()
})


window.addEventListener('load', (e) => console.log('The page is fully Loaded'))

const html = document.querySelector('html')

html.addEventListener('auxclick', (e) => {
    html.style.backgroundColor = 'green'
    alert('LOOK AT WHAT YOU DID!')
})