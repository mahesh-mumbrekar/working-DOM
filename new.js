/*added eventlistner*/


let newParagraph = document.querySelector('p');

function changeparagraph() {
    newParagraph.textContent = 'You clicked!';
}

newParagraph.addEventListener('click', changeparagraph);


/* listening to userinput */


let inputElement = document.querySelector('input');

function retriveUserInput() {
    let enteredText = inputElement.value;
    console.log(enteredText)

}
/*or alternate fuction for this having same output("event" object)
function retriveUserInput(event) {
    let enteredText = event.target.value;
    console.log(enteredText)
*/


inputElement.addEventListener('input', retriveUserInput);