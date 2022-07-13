let f1 = function(){
    console.log('You clicked on button1.')
}

let f2 = function(){
    console.log('Button1 clicked');
}

//Add a function to button1
let button1 = document.getElementById('button1');
/* button1.onclick = f1;
button1.onclick = f2; */

//Add an eventListener to the button1
button1.addEventListener('click', f1);
button1.addEventListener('click', f2);

//Removing a action from eventListener
button1.removeEventListener('click', f2);

//Add a action to button2
let button2 = document.getElementById('button2');
let p1 = document.getElementById('p1');
let flagColor = 0;
// console.log(typeof(flagColor));
button2.onclick = function(){
    if(flagColor == 0){
        p1.style.color = 'rgb(43, 174, 226)';
        flagColor = 1;
    } else {
        p1.style.color = 'rgb(186, 192, 192)';
        flagColor = 0;
    }
}

