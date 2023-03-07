const displayOldValue = document.getElementById('old-value');
const displayNewValue = document.getElementById('new-value');
const buttonsNumbers = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('.operator');

const display = new Display(displayOldValue,displayNewValue)

buttonsNumbers.forEach(button => {
    button.addEventListener('click', () =>{display.addNumber(button.innerHTML)})
})

buttonsOperators.forEach(button => {
    button.addEventListener('click', () => {display.calculated(button.value)})
})
