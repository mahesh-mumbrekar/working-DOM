/*document.body.childNodes[5].href ="http://google.com"*/


let anchorElement = document.getElementById('external-link');
anchorElement.href = 'http://google.com'

let anchorElement2 = document.querySelector('#external-link-2');
anchorElement2.href = "http://youtube.com"


let h1Element = documnet.body.firstElementChild;
console.dir(h1Element);


/* if u want to access the parent then*/

console.dir(h1Element.parentElement);


/* if u want to access sibling then*/

console.dir(h1Element.nextElementSibling);

