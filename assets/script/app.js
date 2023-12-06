const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const resetButton = document.querySelector('.reset');
const counter = document.querySelector('.counter');

//funzione per aumentare il counter
plusButton.addEventListener('click', () => {
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
})

//funzione per decrementare il counter
minusButton.addEventListener('click', () => {
    let currentValue = parseInt(counter.textContent);
        counter.textContent = currentValue - 1;
    
})

//funzione per resettare il valore a 0
resetButton.addEventListener('click', () => {
    let currentValue = parseInt(counter.textContent);
    counter.textContent = 0;
})

