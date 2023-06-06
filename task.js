let yourNameInputElement = document.getElementById('product-name');
let remainingCharElement = document.getElementById('remaining-chars')


let maxallowedChars = yourNameInputElement.maxLength;


function updateRemainingElement(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    let remainingCharacters = maxallowedChars - enteredTextLength;
    remainingCharElement.textContent = remainingCharacters;
    if (remainingCharacters === 0) {
        yourNameInputElement.classList.add('error');
        remainingCharElement.classList.add('error');
    } else if (remainingCharacters <= 10) {
        yourNameInputElement.classList.add('warning');
        remainingCharElement.classList.add('warning');
        yourNameInputElement.classList.remove('error');
        remainingCharElement.classList.remove('error');
    } else {
        yourNameInputElement.classList.remove('warning');
        remainingCharElement.classList.remove('warning');
    }
}


yourNameInputElement.addEventListener('input', updateRemainingElement);
remainingCharElement.addEventListener('input', updateRemainingElement);


/* to change color */

/*remainingCharElement.style.color = "red"*/


/* to change class name of some element or add class name */
/* 1) add class name */
/* in this method the new class is overwritten on old class if alredy present*/

let buttonElement = document.querySelector('button')
buttonElement.className = 'push'


/* 2) add new class and remove class in element */
/* classList is use to add or remove classes without changing old classes*/

buttonElement.classList.add('pull')
buttonElement.classList.remove('push')







