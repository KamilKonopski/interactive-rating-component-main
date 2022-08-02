const rates = document.querySelectorAll('.rate');
const submitButton = document.querySelector('.submit');
const currentRate = document.getElementById('current-rate');
const activeState = document.querySelector('.active-state');
const thankYouState = document.querySelector('.thank-you-state');

let currentNumber = null;


rates.forEach(rate => {
    rate.addEventListener('click', event => {
        const clickedNumber = event.target.innerText;
        currentNumber = clickedNumber;
    });
});

submitButton.addEventListener('click', () => {
    currentRate.innerText = currentNumber;

    activeState.style.display = 'none';
    thankYouState.style.display = "flex";
});