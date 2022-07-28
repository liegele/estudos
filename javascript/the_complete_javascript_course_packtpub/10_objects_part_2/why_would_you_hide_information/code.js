class Phone {

    #make;
    #model;
    #warranty;

    constructor(make, model, warranty) {
        this.#make = make;
        this.#model = model;
        this.#warranty = warranty || 12;
    }

    //Getters
    getMake(){
        return this.#make;
    }

    getModel(){
        return this.#model;
    }

    getWarranty(){
        return this.#warranty;
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

const myPhone = new Phone('iPhone', '13');
myPhone.extendWarranty(24);
console.log(myPhone.getMake());
console.log(myPhone.getModel())
console.log(myPhone.getWarranty());
//myPhone.#make = '';
// console.log(myPhone.make);
