"use strict";
let text = document.querySelector("#typewriter").textContent;
document.querySelector("#typewriter").textContent = "";
let letters = text.split("");
console.log(letters);
let N = 0;
let randominterval = Math.floor(Math.random() * 200) + 150;
var timer = setInterval(function () {
  if (N < letters.length + 1) {
    let oneletter = text.slice(0, N);
    console.log(oneletter);
    N++;
    document.querySelector("#typewriter").textContent = oneletter;
  } else {
    clearInterval(timer);
  }
}, randominterval);
