'use strict'

console.log("HELLO");

const ansElement = document.querySelector("#ans");
const btnElement = document.querySelector("#start");


btnElement.addEventListener("click", () => {
    const pElement = ansElement.firstElementChild;
    pElement.classList.toggle("blind");
});

// startがクリックされたら、問題設定


