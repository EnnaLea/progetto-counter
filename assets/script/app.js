const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const counter = document.querySelector('.counter')

//funzione per aumentare il counter
plusButton.addEventListener('click', () => {
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
})

//funzione per decrementare il counter
minusButton.addEventListener('click', () => {
    let currentValue = parseInt(counter.textContent);
    if(currentValue > 0){
        counter.textContent = currentValue - 1;
    }
})
