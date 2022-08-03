class Phone{
    constructor(make, model, warranty, color){
        this.make = make;
        this.model = model;
        this.warranty = warranty;
        this.color = color;
    }

    //Method to extend warranty for customer.
    extendWarranty(x){
        this.warranty += x;
    }

    //Method to finish warranty.
    endWarranty(){
        this.warranty = 0;
    }

    //Method to return a list of properties of Phone class.
    returnProperties(){
        let props = [];
        let values = [];
        for(let i in this){
            if(this.hasOwnProperty(i)){
                props.push(i);
                values.push(this[i]);
            }
        }
        return [props, values];
    }

}

console.log(Phone);

let myPhone = new Phone('Apple', 'iPhone 14', 12, 'White');
console.log(myPhone.model);
console.log(myPhone.returnProperties());

let listOfProperties = myPhone.returnProperties();
console.log(listOfProperties[0][2] + ' - ' + listOfProperties[1][2]);

console.log(Object.keys(myPhone));
console.log(new Array());