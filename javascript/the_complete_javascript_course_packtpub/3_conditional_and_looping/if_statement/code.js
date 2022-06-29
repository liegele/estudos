var balance = 1000;
var price = 1500;

if(price <= balance){
    console.log("Payment Sucessful!");
    balance -= price;
}else{
    console.log("You don't have enough funds.");
}

var speed = 15;

if(speed > 70){
    console.log("You're going too fast!");
}else if (speed < 40){
    console.log("You're going too slow!")
}else{
    console.log("You're speed is fine!!");
}