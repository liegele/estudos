//store a function inside a variable
var sum = function (a, b){
    return a + b;
}

console.log(sum);

//use functions to set object properties
var myPhone = {
    make: "Apple",
    model: "Iphone 12",
    warranty: 12,
    color: "White",
    showWarrantyDetails: function(){
        console.log("This phone comes with " + this.warranty + " months warranty!");
    }
}

myPhone.showWarrantyDetails();

//pass a function to a function
function f(x){
    return Math.pow(x, 2);
}

console.log(f(3));

function g(myFunction, a, b){
    return myFunction(a) + myFunction(b);
}

console.log(g(f, 4, 5));