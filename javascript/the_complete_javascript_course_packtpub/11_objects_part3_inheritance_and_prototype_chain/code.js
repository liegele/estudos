//Understand the prototype

//Using  object literal
let car = {
    make: 'Audi',
    model: 'A3'
};

// console.log(car);
// console.log(car.__proto__);
// console.log(car.hasOwnProperty('model'));

//Using the Object constructor
let car2 =  new Object();
// console.log(car2);
car2.make = 'Ford';
car2.model = 'Focus';
// console.log(car2.__proto__);
// console.log(Object.prototype);

//Prototype of our own constructor
function phone(make, model, warranty, color){
    this.make= make;
    this.model = model;
    this.warranty = warranty;
    this.color = color;
}

let myPhone = new phone('Apple', 'iPhone 14', 12, 'White');

//Object prototype
console.log(myPhone.__proto__);
console.log(phone.prototype);