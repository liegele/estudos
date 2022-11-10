/* const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt"); */

const superheroes = require("superheroes");
let mySuperheroesName = superheroes.random();

const supervillains = require("supervillains");
let mySuperVillainsName = supervillains.random();

console.log(
  `Superhero: ${mySuperheroesName} versus Supervillain: ${mySuperVillainsName}`
);
