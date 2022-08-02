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

/* //Prototype of our own constructor
function phone(make, model, warranty, color){
    this.make= make;
    this.model = model;
    this.warranty = warranty;
    this.color = color;
}

let myPhone = new phone('Apple', 'iPhone 14', 12, 'White');

//Object prototype
console.log(myPhone.__proto__);
console.log(phone.prototype); */


//Inheritance and prototype chain
let phone1 = {
    make: 'Apple',
    model: 'iPhone 14',
    warranty: 12,
    extendWarranty(x){
        this.warranty += x;
    }
}

let phone2 = {
    make: 'Samsung',
    model: 'S22'
}

//Defining the prototype of phone2 as the phone1 object.
phone2 = Object.create(phone1);
// phone2.__proto__ = phone1;

console.log(phone1);
console.log(phone2);
console.log(phone2.warranty);
phone2.extendWarranty(24);
console.log(phone2.warranty);
console.log(phone2);

let phone3 = {
    make: 'Samsung',
    model: 'S22 Ultra'
}

//Defining the prototype of phone3 as the phone2 object.
phone3 = Object.create(phone2)
// phone3.__proto__ = phone2;
console.log(phone3);
phone3.extendWarranty(12);
console.log(phone3.warranty);

//SuperClass
class Phone{
    constructor(make, model, warranty, color){
        this.make = make || 'Apple';
        this.model = model;
        this.warranty = warranty || 12;
        this.color = color || 'Black';
        //Method inside a constructor. This is not recommended.
        this.extendWarranty = (x) => this.warranty += x;
    }
}

// console.log(Phone);

//SubClass
class SmartPhone extends Phone{
    constructor(make, model){
        super();
        this.make = make;
        this.model = model;
    }
}

let myPhone = new SmartPhone('Samsung', 'S22 5G Ultra');
console.log(myPhone);
// console.log(myPhone instanceof SmartPhone);
myPhone.extendWarranty(24);
console.log(myPhone);
console.log(myPhone.extendWarranty(36));
console.log('-------')

//Cycling through properties and methods of an object
for(let prop in myPhone){
    if(myPhone.hasOwnProperty(prop)){
        console.log(prop);
    }
    
}

console.log('extendWarranty' in myPhone);



