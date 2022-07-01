//Object Literals

var myPhone = {
    make: 'Apple',
    model: 'Iphone 13',
    warranty: 12,
    colour: 'white',
    ring(){
        console.log('beep beep beep...')
    }
}

console.log(myPhone);
console.log(myPhone.model);
console.log(myPhone['model']);
myPhone.ring();

const x = 'make';
console.log(myPhone[x]);

//Challenge
function getProperty(){
    let value = 0;
    value = Math.random() * 4;
    value = Math.floor(value);
    let myProperties = [
        'make',
        'model',
        'warranty',
        'colour'
    ]

    if(value >=0 && value <=3){
        console.log('Random result [' + value + '] --> ' + myPhone[myProperties[value]]);
        //console.log(myPhone)
    }
}

getProperty();