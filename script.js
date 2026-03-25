const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector(".counter__button--decrease");
const counterValue = document.querySelector(".counter__value");
const resetButton = document.querySelector(".counter__reset-button");
const message = document.querySelector(".message");
const body = document.body;

const MAX_LIMIT = 5;


resetButton.addEventListener("click", function () {
    counterValue.textContent = 0;
    message.textContent = "";
    body.classList.remove("limit-reached");
});


decreaseButton.addEventListener("click", function () {
    let currentValue = +counterValue.textContent;
    let newValue = currentValue - 1;

    if (newValue < 0) newValue = 0;

    counterValue.textContent = newValue;

    if (newValue < MAX_LIMIT) {
        message.textContent = "";
        body.classList.remove("limit-reached");
    }
});


increaseButton.addEventListener("click", function () {
    let currentValue = +counterValue.textContent;

    if (currentValue < MAX_LIMIT) {
        let newValue = currentValue + 1;
        counterValue.textContent = newValue;

        if (newValue === MAX_LIMIT) {
            message.textContent = "Reached 5";
            body.classList.add("limit-reached");
        }
    }
});