let input = document.getElementById("guess");
let button = document.getElementById("guessbtn");
let message = document.getElementById("winorlose");
let targetNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

button.addEventListener("click",() => {
    let userguess = parseInt(input.value);
    if(userguess < 1 || userguess > 100){
        message.textContent = "Please guess a valid number between 1-100."
        return;
    }
    attempts++;
    