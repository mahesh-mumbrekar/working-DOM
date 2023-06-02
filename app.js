/*document.body.childNodes[5].href ="http://google.com"*/


let anchorElement = document.getElementById('external-link');
anchorElement.href = 'http://google.com'

let anchorElement2 = document.querySelector('#external-link-2');
anchorElement2.href = "http://youtube.com"


let h1Element = document.body.firstElementChild;
console.dir(h1Element);


/* if u want to access the parent then*/

console.dir(h1Element.parentElement);


/* if u want to access sibling then*/

console.dir(h1Element.nextElementSibling);

/* inserting new element*/
/* 1)create element:-*/
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent=' hi there'

/* 2)get access to the parent element which hold this new element*/

let firstParagraph = document.querySelector('p');

/* 3)insert the new element into the parent element*/

firstParagraph.append(newAnchorElement);

/* for deleting element*/

/* 1)select the element*/

let firstH1Element = document.querySelector('h1');
firstH1Element.remove()


/* moving the elemnt*/

firstParagraph.parentElement.append(firstParagraph)


     