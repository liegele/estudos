/* //Get the number form a prompt
let n = prompt('Enter a whole number to calculate factorial');
n = parseInt(n);

//a design pattern
let factorial = function(n){
    if(n == 1){
        return 1;
    } else {
        return n * factorial(n-1);
    }
};

console.log(factorial(n)); */

/* var factorial = function(n){
    let result = 1;
    for(i = n; i > 0; i--){
        result *= i;
    }
    return result;
}

console.log(factorial(5)); */

let factorial = function(n){
    if(n == 1 || n == 0){
        return 1;
    } else {
        return n * factorial(n-1);
    }
};

console.log(factorial(0));