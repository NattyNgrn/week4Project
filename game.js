let input = document.getElementById("guess");
let button = document.getElementById("guessbtn");
let message = document.getElementById("winorlose");
let targetNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;