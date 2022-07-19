//html elements
let paragraphs = document.querySelectorAll('p');
let div = document.querySelector('div');
// console.log(paragraphs);

//functions
function logHello(){
    console.log('Hello!');
}

//Adding eventlistener to all existing paragraphs
/* for(let i = 0; i < paragraphs.length; i ++){
    paragraphs[i].addEventListener('click', logHello);
} */

//Adding a new paragraph
let paragraph = document.createElement('p');
paragraph.innerHTML  = 'Paragraph 4';
div.appendChild(paragraph);

//Get parent element and add a listener
div.addEventListener('click', function(event){
    if(event.target && event.target.nodeName == 'P'){
        //We found a paragraph
        console.log(event.target.innerHTML + ' clicked!');
        event.target.style.visibility = 'hidden';
    }
});

//Adding a new paragraph
let paragraph5 = document.createElement('p');
paragraph5.innerHTML = 'Paragraph 5';
div.appendChild(paragraph5);