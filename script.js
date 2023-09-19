'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🥳!!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);    */

let secNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageDisplay = function (msg) {
  document.querySelector('.message').textContent = msg;
};

// document.querySelector('.number').textContent = secNum;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    messageDisplay('No number🚫!!!');
  } else if (guess === secNum) {
    messageDisplay('Correct Number 🥳!!!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secNum) {
    if (score > 1) {
      messageDisplay(guess > secNum ? 'Too high📈!!!' : 'Too low📉!!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageDisplay('You have lost the game 🤯💥!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secNum) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high📈!!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You have lost the game 🤯💥!!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secNum) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low📉!!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You have lost the game 🤯💥!!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  messageDisplay('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
