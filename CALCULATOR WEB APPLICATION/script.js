let num1 = document.getElementById("span1");
let num2 = document.getElementById("span2");

num1.textContent = 2;
num2.textContent = 2;
num1 = 2;
num2 = 2;

let ans = document.getElementById("display");

function add() {
  ans.textContent = 2 + 2;
}

function sub() {
  ans.textContent = num1 - num2;
}

function mul() {
  ans.textContent = num1 * num2;
}

function div() {
  ans.textContent = num1 / num2;
}

function sum() {
  ans.textContent = num1 + num2;
}