const divContainer = document.querySelector('.container');

// Creazione del pulsante di incremento
let incrementButton = document.createElement("button");
incrementButton.className='btn btn-info btn-lg plus';
incrementButton.textContent = "+";
divContainer.append(incrementButton);

//Creazione del div counter
let counterButton = document.createElement("div");
counterButton.className= 'counter';
counterButton.textContent = '0'
divContainer.append(counterButton);

// Creazione del pulsante di decremento
let decrementButton = document.createElement("button");
decrementButton.className='btn btn-info btn-lg minus';
decrementButton.textContent = "-";
divContainer.append(decrementButton);


const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const resetButton = document.querySelector(".reset");
const counter = document.querySelector(".counter");

//funzione per aumentare il counter
plusButton.addEventListener("click", () => {
  let currentValue = parseInt(counter.textContent);
  counter.textContent = currentValue + 1;
});

//funzione per decrementare il counter
minusButton.addEventListener("click", () => {
  let currentValue = parseInt(counter.textContent);
  counter.textContent = currentValue - 1;
});

//funzione per resettare il valore a 0
resetButton.addEventListener("click", () => {
  let currentValue = parseInt(counter.textContent);
  counter.textContent = 0;
});
