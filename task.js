let yourNameInputElement = document.getElementById('product-name');
let remainingCharElement = document.getElementById('remaining-chars')


let maxallowedChars = yourNameInputElement.maxLength;


function updateRemainingElement(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    let remainingCharacters = maxallowedChars - enteredTextLength;
    remainingCharElement.textContent = remainingCharacters;
}


yourNameInputElement.addEventListener('input', updateRemainingElement);
remainingCharElement.addEventListener('input', updateRemainingElement);


/* to change color */

remainingCharElement.style.color = "red"


/* to change class name of some element or add class name */
/* 1) add class name */

let buttonElement = document.querySelector('button')
buttonElement.className = 'push'





