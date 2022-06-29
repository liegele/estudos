var numbers = [1, 2, 3, 4, 5, 6];

function sum2(myFunction, myArray){
    var total = 0;
    for(var i = 0; i < myArray.length; i++){
        total += myFunction(myArray[i]);
    }
    return total;
}

function power(a){
    return Math.pow(a, 2);
}

console.log(sum2(power, numbers));