// получение кнопок
const firstButton = document.querySelector('.first')
const secondButton = document.querySelector('.second')
const thirdButton = document.querySelector('.third')


// массив с кнопками
const arrButtons = [
    firstButton, 
    secondButton, 
    thirdButton,
]

// рандомизация кнопок в массиве по индексу
const randomize = Math.floor(Math.random()*arrButtons.length);




function paint() {
    if (randomize == 0) {
        firstButton.onclick = function(){
            this.style.background = 'green'
            return;
        } 
    }
    
    if (randomize == 1) {
        secondButton.onclick = function(){
            this.style.background = 'green'
            return;
        } 
    }

    if (randomize == 2) {
        thirdButton.onclick = function(){
            this.style.background = 'green'
            return;
        } 
    }
    
}
paint();
