let newParagraph = document.querySelector('p');

function changeparagraph() {
    newParagraph.textContent = 'You clicked!'
}


newParagraph.addEventListener('click', changeparagraph )