//create a function
function greeting(){
    console.log("Hello!");
}

//call the function
greeting();

//function with parameter
function greeting2(firstName){
    console.log("Hello " + firstName + "!");
}

//call the function and pass parameter
greeting2("World");

//more than one parameter
function sum(a, b){
    return a + b;
}

var soma = sum(1234, 3);
console.log(soma);

//return a function
function greet(x){
    return function (name){
        console.log(x + " " + name + "!");
    }
}

greet("Hi there")("Gabriel");
greet("Hola")("Anizia");

console.log(greet());

//Creating an object
var house1 = {
    type: "terraced",
    town: "Cambridge",
    openDoor: function(){
        console.log("Opening the door!");
    }
}

var house2 = house1;

console.log(house1.type);
console.log(house1.town);
house1.town = "London";
console.log(house1.town);
console.log(house2.town);
house1.openDoor();
