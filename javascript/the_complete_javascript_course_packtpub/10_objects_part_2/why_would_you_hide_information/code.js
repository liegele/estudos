/* class phone {
    constructor(make, model, warranty) {
        this.make = make;
        this.model = model;
        this.warranty = warranty;
    }
} */

let phone = function(make, model, warranty){
    this.make = make;
    this.model = model;
    this.warranty = warranty || 12; //Fallback if no warranty is assigned.
}

phone.prototype = {
    extendWarranty(x){
        this.warranty += x;
    }
}

let myPhone = new phone('iPhone', '13');
myPhone.extendWarranty(24);
console.log(myPhone.make);
console.log(myPhone.warranty);

//Create Setters and Getters
