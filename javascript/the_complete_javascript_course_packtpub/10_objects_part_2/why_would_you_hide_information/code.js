class Phone {

    #make;
    #model;
    #warranty;

    constructor(make, model, warranty) {
        this.#make = make;
        this.#model = model;
        this.#warranty = warranty || 12;
    }

    extendWarranty(x){
        this.#warranty += 12;
    }
}

/* let phone = function(make, model, warranty){
    this.make = make;
    this.model = model;
    this.warranty = warranty || 12; //Fallback if no warranty is assigned.
}

phone.prototype = {
    extendWarranty(x){
        this.warranty += x;
    }
} */

let myPhone = new Phone('iPhone', '13');
myPhone.extendWarranty(24);
console.log(myPhone.make);
console.log(myPhone.warranty);
myPhone.make = '';
console.log(myPhone.make);

//Create Setters and Getters
