'use strict'

const ansElement = document.querySelector("#ans");
const btnElement = document.querySelector("#confirm");


btnElement.addEventListener("click", () => {
    const pElement = ansElement.firstElementChild;
    pElement.classList.toggle("blind");
});

