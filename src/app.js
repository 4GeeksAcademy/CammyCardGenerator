/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generateRandomNum = () => {
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const generateRandomSuit = () => {
  const suit = ["spade", "club", "diamond", "heart"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

const getNewCard = () => {
  document.querySelector(".card").className = "card";
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNum();
};

window.onload = () => {
  getNewCard();
  document.querySelector(".button").onclick = function() {
    getNewCard();
  };
};

setInterval(function() {
  getNewCard();
}, 3000);

document.querySelector(".sizeChange").onclick = function() {
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;
  document
    .querySelector(".card")
    .setAttribute("style", "width:" + width + "px; height:" + height + "px");
};
