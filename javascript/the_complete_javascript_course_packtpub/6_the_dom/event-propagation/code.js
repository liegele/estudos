let div = document.querySelector('div');
let p = document.querySelector('p');
let span = document.querySelector('span');

//functions
function logDiv(){
    console.log('Div!');
}

function logP(){
    console.log('Paragraph!');
}

function logSpan(){
    console.log('Span!');
}

//Event Handlers
div.addEventListener('click', logDiv, true);
p.addEventListener('click', logP, true);
span.addEventListener('click', logSpan);

// console.log(this);