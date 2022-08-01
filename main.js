const rates = document.querySelectorAll('.rates');
const submitButton = document.querySelector('.submit');
const currentRate = document.getElementById('current-rate');

let currentNumber = null;

rates.forEach(rate => {
    rate.addEventListener('click', event => {
        const clickedNumber = event.target;
        currentNumber = clickedNumber.innerText
    });
});

submitButton.addEventListener('click', () => {
    currentRate.innerText = currentNumber;
});