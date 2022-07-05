//Let's create a object
let person = {
    name: "Liégele Cabral",
    state: "Brasília",
    birth: 1976
};

//JSON object
let personJSON = {
    "name": "Liégele Cabral",
    "state": "Brasília",
    "birth": 1976
};

//JSON array
let personJSON2 = [
    {
        "name": "Liégele Cabral",
        "state": "Brasília",
        "birth": 1976
    },
    {
        "name": "Anizia Oliveira",
        "state": "Sergipe",
        "birth": 1976
    },
    {
        "name": "Gabriel Oliveira",
        "state": "Bahia",
        "birth": 1976
    }

];

console.log(personJSON);
console.log(typeof personJSON);
console.log(personJSON2);
console.log(typeof personJSON2);

//Convert to a JSON string
let personString = JSON.stringify(personJSON2);
console.log(personString);
console.log(typeof personString);

//Parse a JON string
var personParsedAsJSON = JSON.parse(personString);
console.log(personParsedAsJSON);
console.log(typeof personParsedAsJSON);