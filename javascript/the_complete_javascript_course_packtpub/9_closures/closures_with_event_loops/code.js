for(let i = 0; i < 3; i ++){
    /* document.getElementById(i).onclick = function(){
        console.log(i);
    } */
    let button = document.getElementById(i);
    button.onclick = function(){
        console.log(i);
    }

}

let cars = [];
for(let i = 0; i < 11; i ++){
    cars.push(function(){
        console.log(i);
    });
}

cars[10]();
console.log('Array cars has ' + cars.length + ' elements.');