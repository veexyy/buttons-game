// получение кнопок
const firstButton = document.querySelector('.first')
const secondButton = document.querySelector('.second')
const thirdButton = document.querySelector('.third')

// получение результата
const result = document.querySelector('.result')
// массив с кнопками
const arrButtons = [
    firstButton, 
    secondButton, 
    thirdButton,
]

// рандомизация кнопок в массиве по индексу
const randomize = Math.floor(Math.random()*arrButtons.length);


// result.onclick = function() {
//     firstButton.style.background = '#FFB840';
//     secondButton.style.background = '#FFB840';
//     thirdButton.style.background = '#FFB840';
//     firstButton.disabled = false;
//     secondButton.disabled = false;
//     thirdButton.disabled = false;
//     this.hidden = true;
// }

// функция, которая красит кнопки в зависимости от результата игрока
function paint() {
    // если выпал 0 или же первая кнопка
    if (randomize == 0) {
        firstButton.onclick = function(){
            // красит первую кнопку в цвет охры, остальные в серый и деактивирует, а также выводит сообщение о победе
            this.style.background = '#CC7722';
            secondButton.style.background = '#e6ddce';
            thirdButton.style.background = '#e6ddce';
            secondButton.disabled = true;
            thirdButton.disabled = true;
            document.querySelector('.text.result').innerHTML = 'You win!';
            result.hidden = false;
        } 
    }
    else{
        firstButton.onclick = function(){
            // деактивирует все кнопки, красит их в серый и выводит сообщение о проигрыше
            this.style.background = '#e6ddce';
            secondButton.style.background = '#e6ddce';
            thirdButton.style.background = '#e6ddce';
            this.disabled = true;
            this.style.color = 'black';
            secondButton.disabled = true;
            thirdButton.disabled = true;
            document.querySelector('.text.result').innerHTML = 'Try again';
            result.hidden = false;
        }  
    }
    // если выпало 1 или вторая кнопка
    if (randomize == 1) {
        secondButton.onclick = function(){
            // красит вторую кнопку в цвет охры, остальные в серый и деактивирует, а также выводит сообщение о победе
            this.style.background = '#CC7722';
            firstButton.style.background = '#e6ddce';
            thirdButton.style.background = '#e6ddce';
            firstButton.disabled = true;
            thirdButton.disabled = true;
            document.querySelector('.text.result').innerHTML = 'You win!';
            result.hidden = false;
        }  
    }
    else{
        secondButton.onclick = function(){
            // деактивирует все кнопки, красит их в серый и выводит сообщение о проигрыше
            this.style.background = '#e6ddce';
            firstButton.style.background = '#e6ddce';
            thirdButton.style.background = '#e6ddce';
            this.disabled = true;
            this.style.color = 'black';
            firstButton.disabled = true;
            thirdButton.disabled = true;
            document.querySelector('.text.result').innerHTML = 'Try again';
            result.hidden = false;
        }  
    }

    // если выпало 2 или третья кнопка
    if (randomize == 2) {
        thirdButton.onclick = function(){
            // красит третью кнопку в цвет охры, остальные в серый и деактивирует, а также выводит сообщение о победе
            this.style.background = '#CC7722';
            firstButton.style.background = '#e6ddce';
            secondButton.style.background = '#e6ddce';
            firstButton.disabled = true;
            secondButton.disabled = true;
            document.querySelector('.text.result').innerHTML = 'You win!';
            result.hidden = false;
        } 
    
    }
    else{
        thirdButton.onclick = function(){
            // деактивирует все кнопки, красит их в серый и выводит сообщение о проигрыше
            this.style.background = '#e6ddce';
            firstButton.style.background = '#e6ddce';
            secondButton.style.background = '#e6ddce';
            this.disabled = true;
            this.style.color = 'black';
            secondButton.disabled = true;
            firstButton.disabled = true;
            document.querySelector('.text.result').innerHTML = 'Try again';
            result.hidden = false;
        }  
    }
}
paint();
