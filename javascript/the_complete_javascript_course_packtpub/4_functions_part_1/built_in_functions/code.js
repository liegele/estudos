//Asking for user a whole number
/* let n ='';
console.log(!Number.isInteger(n));
while ( !Number.isInteger(n) ){
    n = prompt('Please enter a whole number!');
    n = parseInt(n);
    console.log(n + ' - type of: ' + typeof(n));
} */

window.eval("var a = 1;");
console.log(a);

let i = 0;
function counter(){
    console.log(i);
    i++;
    if(i == 10){
        clearInterval(cc);
    }
}

let cc = setInterval(counter, 1000);

setTimeout(() => {
    console.log('I\'ve been waiting for 3 seconds!');
}, 3000);
