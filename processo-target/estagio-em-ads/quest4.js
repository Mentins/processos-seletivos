
//QUESTÃO 4:
/*
  Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

  SP - R$67.836,43
  RJ - R$36.678,66
  MG - R$29.229,88
  ES - R$27.165,48
  Outros - R$19.849,53
  
  Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

const valorTotal = sp + rj + mg + es + outros; //Está sendo calculado o valor total mensal da distribuidora.

console.log("Porcentagem de São Paulo foi:", ((sp*100)/ valorTotal).toFixed(4)); //Está sendo calculado a porcentagem de sp no valor total e exibindo
console.log("Porcentagem do Rio de Janeiro foi:", ((rj*100)/ valorTotal).toFixed(4)); //Está sendo calculado a porcentagem do rj no valor total e exibindo
console.log("Porcentagem de Minas Gerais foi:", ((mg*100)/ valorTotal).toFixed(4)); //Está sendo calculado a porcentagem de mg no valor total e exibindo
console.log("Porcentagem do Espírito Santo foi:", ((es*100)/ valorTotal).toFixed(4)); //Está sendo calculado a porcentagem do es no valor total e exibindo
console.log("Porcentagem dos outros estados foram:", ((outros*100)/ valorTotal).toFixed(4)); //Está sendo calculado a porcentagem dos outros estados no valor total e exibindo