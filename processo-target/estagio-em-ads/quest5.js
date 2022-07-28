
//QUESTÃO 5:
/*
    Escreva um programa que inverta os caracteres de uma string.

    IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sia preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como por exemplo, reverse;
*/

function reverteString(palavra){ //Está sendo criada a função reverteString que recebe uma palavra como parametro
    let stringInvertida = ""; //Está sendo criada uma string vazia que será usada para reverter a palavra
    for (let i = palavra.length - 1; i >= 0; i--){
        /*Foi aberto um laço de repetição que transforma a palavra recebida em um array e passa o tamanho do array -1 para a variavel i. I está recebendo o tamanho do array -1 para que o valor de i equivalha aos índices deste mesmo array.*/
        //Este array está caminhando do final para o ínicio
        stringInvertida += palavra[i]; //Esta concatenando as últimas letras do parametro palavra e inserindo a stringInvertida
    }
    console.log(stringInvertida); //Retorna o valor final de stringInvertida
}

reverteString("Thiago");
reverteString("Target");
reverteString("Me contrata, por favor ;-;");