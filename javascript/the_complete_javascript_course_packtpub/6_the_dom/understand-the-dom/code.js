//Access an element by ID
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
console.log(p1);
console.log(p1.innerHTML);
console.log(p2);
console.log(p2.innerHTML);

//Access a list of elements by tagname
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

//Access the first element with a certain characteristic
let firstParagraph = document.querySelector('.green');
console.log(firstParagraph);

//Access properties of one of those elements in the HTMLcollection
console.log(paragraphs[2].innerHTML);

//Access a children of a node
let bodyChildren = document.body.children;
console.log(bodyChildren);

//Add a new child to the body
let p = document.createElement('p');
console.log(p);
let textNode = document.createTextNode('A new paragraph');
p.appendChild(textNode);
document.body.appendChild(p);
console.log(window.document);

//Access a sibling
let sibling = p1.nextElementSibling;
console.log(sibling);

//Access a first child and last child of an list
let list = document.querySelector('ul');
console.log(list);
console.log(list.firstElementChild.innerHTML);
console.log(list.lastElementChild.innerHTML);

//Access parent element
console.log(list.parentElement);

let list2 = document.querySelector('li');
console.log(list2.parentElement);

//Change DOM elements (Using p1 and p2 variables already defined above)
p1.innerHTML = 'A new Paragraph 1.';
p2.innerHTML += ' + new text concated through code manipulation.'

let link = document.getElementById('link');
console.log(link.setAttribute('href', 'http://uol.com.br'));

//Change HTML styling
p1.style.backgroundColor = 'rgb(15, 15, 15)';
p1.style.paddingTop = '10px';
p1.style.paddingBottom = '10px';
p2.style.display = 'none';
p3.style.color = 'orange';

//Using forEach method, add a new brand to each list
let ul = document.getElementsByTagName('ul');
console.log(ul);
console.log(ul.length);

// ### Pay attention to this line ###

HTMLCollection.prototype.forEach = Array.prototype.forEach;

ul.forEach(function(element){
    element.innerHTML += '<li>Ford</li>';
});

//Using the Array.from()
Array.from(ul).forEach(element => {
    element.innerHTML += '<li>Maserati</li>';
});

//Remove HTML child element
let list1 = document.getElementById('list1');
let item1 = document.getElementById('item1');
list1.removeChild(item1);

//Build a method 'remove' (or whatever name you want) which removes any elements from the DOM
Element.prototype.remove = function(){
    let parent = this.parentElement;
    parent.removeChild(this);
    // this.parentElement.removeChild(this);
}

p3.remove();