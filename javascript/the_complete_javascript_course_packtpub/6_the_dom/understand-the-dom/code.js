//Access an element by ID
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
console.log(p1);
console.log(p1.innerHTML);
console.log(p2);
console.log(p2.innerHTML);

//Access a list of elements by tagname
var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//Access the first element with a certain characteristic
let firstParagraph = document.querySelector(".green");
console.log(firstParagraph);

//Access properties of one of those elements in the HTMLcollection
console.log(paragraphs[2].innerHTML);

//Access a children of a node
let bodyChildren = document.body.children;
console.log(bodyChildren);

//Add a new child to the body
let p = document.createElement("p");
console.log(p);
let textNode = document.createTextNode("A new paragraph");
p.appendChild(textNode);
document.body.appendChild(p);
console.log(window.document);

//Access a sibling
let sibling = p1.nextElementSibling;
console.log(sibling);

//Access a first child and last child of an list
let list = document.querySelector("ul");
console.log(list);
console.log(list.firstElementChild.innerHTML);
console.log(list.lastElementChild.innerHTML);

//Access parent element
console.log(list.parentElement);

let list2 = document.querySelector('li');
console.log(list2.parentElement);


