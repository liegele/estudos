
//Obtendo o valor da compra e ajustando as casas decimais
var valorCompra = prompt("Digite o valor da compra");
valorCompra = parseFloat(valorCompra).toFixed(2); 

//Obtendo o valor recebido pelo caixa e ajustando as casas decimais
var valorRecebido = prompt("Qual o valor recebido?");
valorRecebido = parseFloat(valorRecebido).toFixed(2);

//Calculando o troco devido
var troco = parseFloat(valorRecebido - valorCompra).toFixed(2);

//Exibindo os dados para o cliente e/ou caixa
alert("Valor da compra R$ " + valorCompra + " | Valor pago R$ " + valorRecebido + " | Troco R$ " + troco);
console.log("Valor da compra R$ " + valorCompra + " | Valor pago R$ " + valorRecebido + " | Troco R$ " + troco);

//Notas: 100, 50, 20, 10, 5, 2 | Moedas: 1, 0.50, 0.25, 0.10, 0.05, 0.01

var nota100 = Math.floor(troco / 100);
troco = (troco % 100).toFixed(2);
nota100 > 0 ? console.log("Notas de 100: " + nota100): 0;
//console.log("Troco restante: R$ " + troco);

var nota50 = Math.floor(troco / 50);
troco = (troco % 50).toFixed(2);
nota50 > 0 ? console.log("Notas de 50: " + nota50): 0;
//console.log("Troco restante: R$ " + troco);

var nota20 = Math.floor(troco / 20);
troco = (troco % 20).toFixed(2);
nota20 > 0 ? console.log("Notas de 20: " + nota20): 0;
//console.log("Troco restante: R$ " + troco);

var nota10 = Math.floor(troco / 10);
troco = (troco % 10).toFixed(2);
nota10 > 0 ? console.log("Notas de 10: " + nota10): 0;
//console.log("Troco restante: R$ " + troco);

var nota5 = Math.floor(troco / 5);
troco = (troco % 5).toFixed(2);
nota5 > 0 ? console.log("Notas de 5: " + nota5): 0;
//console.log("Troco restante: R$ " + troco);

var nota2 = Math.floor(troco / 2);
troco = (troco % 2).toFixed(2);
nota2 > 0 ? console.log("Notas de 2: " + nota2): 0;
//console.log("Troco restante: R$ " + troco);

var moeda1 = Math.floor(troco / 1);
troco = (troco % 1).toFixed(2);
moeda1 > 0 ? console.log("Moedas de 1: " + moeda1): 0;
//console.log("Troco restante: R$ " + troco);

var moeda50 = Math.floor(troco / 0.50);
troco = (troco % 0.50).toFixed(2);
moeda50 > 0 ? console.log("Moedas de 0.50: " + moeda50): 0;
//console.log("Troco restante: R$ " + troco);

var moeda25 = Math.floor(troco / 0.25);
troco = (troco % 0.25).toFixed(2);
moeda25 > 0 ? console.log("Moedas de 0.25: " + moeda25): 0;
//console.log("Troco restante: R$ " + troco);

var moeda10 = Math.floor(troco / 0.10);
troco = (troco % 0.10).toFixed(2);
moeda10 > 0 ? console.log("Moedas de 0.10: " + moeda10): 0;
//console.log("Troco restante: R$ " + troco);

var moeda5 = Math.floor(troco / 0.05);
troco = (troco % 0.05).toFixed(2);
moeda5 > 0 ? console.log("Moedas de 0.05: " + moeda5): 0;
//console.log("Troco restante: R$ " + troco);

var moeda1c = Math.floor(troco / 0.01);
troco = (troco % 0.01).toFixed(2);
moeda1c > 0 ? console.log("Moedas de 0.01: " + moeda1c): 0;
//console.log("Troco restante: R$ " + troco);


/*
//Cálculos para valores do troco
var parteInteira = Math.floor(troco);
console.log(parteInteira);

var parteDecimal1 = (troco - parteInteira).toFixed(2);
parteDecimal1 = parteDecimal1 * 10;
parteDecimal1 = (Math.floor(parteDecimal1) / 10);
console.log(parteDecimal1.toFixed(2));

var parteDecimal2 = troco - (parteInteira + parteDecimal1);
console.log(parteDecimal2.toFixed(2));
*/
