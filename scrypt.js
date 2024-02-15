let input = document.querySelector("input");
let secretNumber = getRandomInt(1, 10);
input.value = ``;
let span = document.querySelector("span");
span.innerHTML = 3;
let buttons = document.querySelector(".buttons");
let finish = false;


document.querySelector(".buttons").onclick = function () {
    let target = event.target;
    console.dir(target)
    if (finish == false) {
        if (target.innerHTML == secretNumber) {
            input.value = `${secretNumber} правильное число!`
        } else {
            input.value = `${target.innerHTML} не правильное число`;
            span.innerHTML -= 1;
            if (span.innerHTML == 0) {
                finish = true;
            }
        }
    }
    document.querySelector(".newGame").onclick = function () {
        span.innerHTML = 3;
        finish = false;
        secretNumber = getRandomInt(1, 10); 


    }






}
console.log(secretNumber)



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}