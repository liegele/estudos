/* //Try this first
function add1(){
    let x = 1;
    let f = function(y){
        return x + y;
    }
    return f(3);
}

console.log(add1()); */

//Try this
let add = function(){
    let x = 1;
    let f = function(y){
        return x + y;
    };
    return f;
}

let g = add();
console.log(g(2));

//Update values of outer vaiables
let n;
function f(x){
    n = function(){
        return x;
    };
    x ++;
}

//Call function f
f(123);
console.log(n());

//Global EC (Execution Context)
    //=>n = undefined
    //=>f

//f EC
    //=>n = function(){return x}
    //=>x = 124
//n EC
    //=>x = 124