let shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);

/* for(let i = 0; i < shoppingList.length; i ++){
    console.log(shoppingList[i]);
} */

/* shoppingList.forEach(function(i){
    console.log('I can eat ' + i);
}); */

let arrowFunction = i => console.log('I can eat ' + i);

shoppingList.forEach(arrowFunction);