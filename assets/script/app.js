const divAllContainer = document.querySelector(".container");
const divContainer = document.querySelector(".containerButton");

// Funzione unica creazione elementi DOM dinamicamente
const incrementButton = createButton("+", "btn btn-info btn-lg plus", "plus");
const counterButton = createCounter("counter", "0");
const decrementButton = createButton("-", "btn btn-info btn-lg minus", "minus");
const resetButton = createButton("RESET", "btn btn-secondary", "reset");

divContainer.append(incrementButton, counterButton, decrementButton);
divAllContainer.append(resetButton);

// Funzione per creare un pulsante
function createButton(text, className, id) {
  let button = document.createElement("button");
  button.className = className;
  button.textContent = text;
  button.id = id;
  return button;
}

// Funzione per creare il div del counter
function createCounter(className, text) {
  let counterDiv = document.createElement("div");
  counterDiv.className = className;
  counterDiv.textContent = text;
  return counterDiv;
}

// Aggiunta di un listener al genitore usando event delegation
divAllContainer.addEventListener("click", (e) => {
  const target = e.target;
  const counter = document.querySelector(".counter");

  if (target.tagName === "BUTTON") {
    let currentValue = parseInt(counter.textContent);

    switch (target.id) {
      case "plus":
        counter.textContent = currentValue + 1;
        break;
      case "minus":
        counter.textContent = currentValue - 1;
        break;
      case "reset":
        counter.textContent = 0;
        break;
    }
  }
});
