let shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);
console.log(typeof shoppingList);

//Array constructor
let shoppingList2 = new Array('bread', 'eggs', 'milk');
console.log(shoppingList2);
console.log(typeof shoppingList2);

console.log(shoppingList[1]);

//Add an element at the end
shoppingList.push('pear');
console.log(shoppingList);
console.log(shoppingList.sort());
console.log(shoppingList.reverse());

//Sorting an array
let numbers = [12, 4, 67, 14, 2, 7, 99, 53];
console.log(numbers);
let numbersSorted = numbers.sort();
console.log(numbersSorted);

console.log(shoppingList);

//Map
let addDelicious = function(n) {
    return 'Delicious ' + n;
}

let x = shoppingList.map(addDelicious);
console.log(x);

//Dell na bateria às 18:24 [100%]
//Dell na bateria às 20:36 [87%]