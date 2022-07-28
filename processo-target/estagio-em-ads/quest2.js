//QUESTÃO 2:
/*
    Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

IMPORTANTE:
    Esse número pode ser informado atavés de qualquer entrada de sua preferência ou pode ser previamente definido no código.
*/

// Primeiro eu decidi criar uma função que receberia como parâmetro um número inserido, e então verificaria se o número recebido (numeroDado) pertence ou não a sequência de Fibonacci.
function encontraFibonacci(numeroDado){ 
    let n1 = 0; //Criando a váriavel do primeiro número da série.
    let n2 = 1; //Criação da váriavel do segundo número da série para que possa ser dada a continuidado a sequência.
    let n3 = 1; // Tive que inserir um valor para o terceiro número da sériq, pois estava tendo problemas no laço de repetição.


    // Foi preciso criar uma estrutura de condição para que o programa só aceite valores iguais ou maiores do que 0.
    if (numeroDado < 0){
        console.log('[ERRO...] Digite um número que seja igual ou maior que 0.');
    }

    // Decidi então usar uma estrutura de condição para verificar se o número inserido é compatiível com os dois primeiros números da série de Fibonacci, pois, uma vez dentro do laço de repetição criado, os números 0 e 1 não seriam mais acessíveis.
    if (numeroDado == n1 || numeroDado == n2){ 
        console.log(`O número ${numeroDado} PERTENCE a série de Fibonacci.`);

    // Caso o número seja maior do que 0 e 1, será então feito o calculo da sequência de Fibonacci para ver se o número digitado faz parte ou não da mesma sequência.
    } else {
        while(numeroDado > n3){
            n3 = n1 + n2; // Lugar onde a mágica da sequência se inicia.
            n1 = n2;
            n2 = n3; // Lugar onde a mágica da sequência termina.

            // Estrutura de condição usada para verificar se o número passado pertence ou não a sequência de Fibonacci.
            // Caso a contagem encontre o valor passado no meio do caminho, será admitido que este valor faz parte da sequência de Fibonacci.
            if(n3 == numeroDado){
                console.log(`O número ${numeroDado} PERTENCE a sequência de Fibonacci.`);

            // Caso a contagem seja superior ao valor passado, e não encontrou este mesmo valor na constagem, então será admitido que este valor não pertence a sequência de Fibonacci.
            } else if (n3 > numeroDado){ 
                console.log(`O número ${numeroDado} NÃO PERTENCE a sequência de Fibonacci.`);
            }
        }
    }
}

encontraFibonacci(-5);
encontraFibonacci(0);
encontraFibonacci(1);
encontraFibonacci(5);
encontraFibonacci(10);
encontraFibonacci(32);