const redBlock = document.querySelector('.blocks .block--red');
const blueBlock = document.querySelector('.blocks .block--blue');
const greenBlock = document.querySelector('.blocks .block--green');
const pinkBlock = document.querySelector('.blocks .block--pink');
const grayBlock = document.querySelector('.blocks .block--gray');
const allBlocks = document.querySelectorAll('.block');


blueBlock.addEventListener('click', (e) => {
    redBlock.style.backgroundColor = 'blue'
    blueBlock.style.backgroundColor = 'red'
    greenBlock.style.backgroundColor = 'green'
    pinkBlock.style.backgroundColor = 'pink'
    grayBlock.style.backgroundColor = 'gray'
})

greenBlock.addEventListener('click', (e) => {
    redBlock.style.backgroundColor = 'green'
    blueBlock.style.backgroundColor = 'blue'
    greenBlock.style.backgroundColor = 'red'
    pinkBlock.style.backgroundColor = 'pink'
    grayBlock.style.backgroundColor = 'gray'
        // blueBlock = redBlock
    console.log(e) 
})

pinkBlock.addEventListener('click', (e) => {
    redBlock.style.backgroundColor = 'pink'
    blueBlock.style.backgroundColor = 'blue'
    greenBlock.style.backgroundColor = 'green'
    pinkBlock.style.backgroundColor = 'red'
    grayBlock.style.backgroundColor = 'gray'
        // blueBlock = redBlock
    console.log(e) 
})

grayBlock.addEventListener('click', (e) => {
    redBlock.style.backgroundColor = 'gray'
    blueBlock.style.backgroundColor = 'blue'
    greenBlock.style.backgroundColor = 'green'
    pinkBlock.style.backgroundColor = 'pink'
    grayBlock.style.backgroundColor = 'red'
        // blueBlock = redBlock
    console.log(e) 
})

redBlock.addEventListener('click', (e) => {
    redBlock.style.backgroundColor = 'red'
    blueBlock.style.backgroundColor = 'blue'
    greenBlock.style.backgroundColor = 'green'
    pinkBlock.style.backgroundColor = 'pink'
    grayBlock.style.backgroundColor = 'gray'
        // blueBlock = redBlock
    console.log(e) 
})
