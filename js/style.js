// JavaScript Document
'use strict';

let dice = {
  sides: 6,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber(number) {
  let placeholder = document.getElementById('myDice');
  placeholder.innerHTML = number;
}

let button = document.getElementById('button');

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
