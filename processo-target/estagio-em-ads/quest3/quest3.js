
//QUESTÃO 3:
/*
    Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa , na linguagem que desejar, que calcule e retorne:
    A)O menor valor de faturamento ocorrido em um dia do mês;
    B)O maior valor de faturamento ocorrido em um dia do mês;
    C)Número de dias em que o valor de faturamento diário foi superior à média mensal;

    IMPORTANTE:
    1-Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    2-Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const dadosJson = require('./dados.json'); //Está sendo pego o arquivo json disponibilizado e ele está sendo passado para uma constante chamada dadosJson que está transformando ele em um array

// 3-A

//Terá de ser criada uma variável que receberá uma função que verificará o menor elemento dentro do array e armazenará o mesmo dentro da variável menorValorFaturado
let menorValorFaturado = dadosJson.reduce(function(anterior, atual) { 
    //Após a criação da variável a dada a função, será necessário verificar se o valor do dia anterior foi menor que o valor do dia atual (sendo que o valor necessita ser diferente de 0). Caso o valor do dia anterior seja diferente de 0 e menor que o valor do dia atual, irá armazenar este valor a variável menorValorFaturado. Caso isso não ocorra, menorValorFaturado será conservado.
	return anterior.valor != 0 && anterior.valor < atual.valor ? anterior : atual; 
})
console.log('o dia e valor do MENOR faturamento foi:', menorValorFaturado);

// 3-B

//Se cria uma variável que recebe uma função que verificará o maior elemento dentro do array e armazenará o mesmo dentro da variável maiorValorFaturado
let maiorValorFaturado = dadosJson.reduce(function(anterior, atual) { 
    //Terá que verificar se o valor do dia anterior foi maior que o valor do dia atual. Caso sim, irá manter o valor anterior como maiorValorFaturado. Caso não, irá trocar o valor anterior pelo atual.
	return anterior.valor > atual.valor ? anterior : atual; 
})
console.log('o dia e valor do MAIOR faturamento foi:', maiorValorFaturado);

// 3-C
/*Nesta etapa do programa foi preciso criar uma váriavel soma para calcular a média mensal de faturamento;
 Após isso, se fez necessário a criação de uma variável para armazenar a quantidade de dias em que o faturamento foi superior a zero para que se pudesse calcular a média mensal.;
 Posteriormente à isso, tive que calcular a média do faturamento baseada nos dias em o faturamento não foi nulo; 
 E por fim, foi necessário criar uma variável chamada "diasSuperioresAMedia", para armazenar o número de dias em que o faturamento foi acima da média.*/
 
let soma = 0
for(let i = 0; i < dadosJson.length; i++) { //está sendo realizada a soma de todos os valores do faturamento no mês
    soma += dadosJson[i].valor
}

//Decidi criar uma variável que calculará os dias sem faturamento para que pudesse calcular a média do faturamento, como foi pedido no enunciado. Para isso, abri um laço de repetição que irá somar o número de dias em que o faturamento foi diferente de zero e inserir o total de dias na variável diasMaiorQueZero
let diasMaiorQueZero = 0;
for(let i = 0; i < dadosJson.length; i++){
    if(dadosJson[i].valor != 0){
        diasMaiorQueZero++
    }
}

media = soma/diasMaiorQueZero //Está sendo calculada a média através da soma dos dias de faturamento dividida pelos dias em que o faturamento não foi zero. 

let diasSuperioresAMedia = 0;
for(let i = 0; i < dadosJson.length; i++){
    if(dadosJson[i].valor > media){
        diasSuperioresAMedia++
    }
}
console.log(`O número de dias em que o faturamento foi maior do que a média mensal é: ${diasSuperioresAMedia}`)