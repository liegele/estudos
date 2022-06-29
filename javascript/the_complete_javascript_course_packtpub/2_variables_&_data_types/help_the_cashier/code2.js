
//Obtendo o valor da compra e ajustando as casas decimais
var valorCompra = prompt("Digite o valor da compra");
valorCompra = valorCompra.replace(",", ".");
valorCompra = parseFloat(valorCompra).toFixed(2); 

//Obtendo o valor recebido pelo caixa e ajustando as casas decimais
var valorRecebido = prompt("Qual o valor recebido?");
valorRecebido = valorRecebido.replace(",", ".");
valorRecebido = parseFloat(valorRecebido).toFixed(2);

//Calculando o troco devido
var troco = parseFloat(valorRecebido - valorCompra).toFixed(2);

//Exibindo os dados para o cliente e/ou caixa
alert("Valor da compra R$ " + valorCompra + " | Valor pago R$ " + valorRecebido + " | Troco R$ " + troco);
console.log("Valor da compra R$ " + valorCompra + " | Valor pago R$ " + valorRecebido + " | Troco R$ " + troco);

//Notas: 100, 50, 20, 10, 5, 2 | Moedas: 1, 0.50, 0.25, 0.10, 0.05, 0.01

var notasMoedas = [
    "Notas de 100: ",
    "Notas de 50: ",
    "Notas de 20: ",
    "Notas de 10: ",
    "Notas de 5: ",
    "Notas de 2: ",
    "Moedas de 1: ",
    "Moedas de 0.50: ",
    "Moedas de 0.25: ",
    "Moedas de 0.10: ",
    "Moedas de 0.05: ",
    "Moedas de 0.01: "
]

var notas = [
    100,
    50,
    20,
    10,
    5,
    2,
    1,
    0.50,
    0.25,
    0.10,
    0.05,
    0.01
]

//Melhorando a eficiência do código com o For loop.
var nota = 0;

/* for(i = 0; i < 12; i ++){
    nota = Math.floor(troco / notas[i]);
    troco = (troco % notas[i]).toFixed(2);
    nota > 0 ? console.log(notasMoedas[i] + nota) : 0;
} */

var i = 0;
while(troco > 0){
    nota = Math.floor(troco / notas[i]);
    troco = (troco % notas[i]).toFixed(2);
    nota > 0 ? console.log(notasMoedas[i] + nota) : 0;
    i ++;
}
console.log("Qtde iterações: " + i);