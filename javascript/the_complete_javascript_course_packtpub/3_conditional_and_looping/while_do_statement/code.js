/* var i = 0;

while(i < 5){
    console.log(i);
    i++;
} */

var balance = 1000;
var itemNumber = 0;

// console.log(Math.random() * 100 + 1);

while(balance > 0 ){
    //pick a random item
    var itemPrice = (Math.random() * 100) + 1;
    itemPrice = Math.floor(itemPrice);

    if(itemPrice <= balance){
        //buy the item
        itemNumber ++;
        //update balance
        balance -= itemPrice;
        //print the new balance and the purchase amount
        console.log(itemNumber + ". Item Price: $" + itemPrice);
        console.log("Left: " + balance);
    }
}


/* var i = 99.01;

console.log("Floor: " + Math.floor(i) + " | " + "Ceil: " + Math.ceil(i)); */

var i = 50;

do{
    console.log(i);
    i--;
}while(i > 45)