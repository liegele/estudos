// console.log(window);

//Access an element by ID
console.log(document.getElementById('header'));
let header = document.getElementById('header');
console.log(typeof header);
console.log(header.innerHTML);

//Access children of a node
let bodyChildren = document.body.children;
console.log(bodyChildren);

//Add a new child to the body
let p = document.createElement('p');
console.log(p);
let textNode = document.createTextNode('A new paragraph.');
p.appendChild(textNode);
console.log(p);
document.body.appendChild(p);
console.log(window.document);

console.log(document.getElementById('header'));

