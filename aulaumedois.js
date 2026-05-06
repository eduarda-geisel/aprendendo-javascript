const peso = 55;
const altura = 1.56;
const imc = peso / (altura * altura);
console.log(`O IMC é: ${imc.toFixed(2)}`);

if(imc < 18.5){
    console.log('Você está abaixo do peso');
} else if(imc >= 18.5 && imc < 25.9) {
    console.log('Seu peso está normal');
} else if(imc >= 25.9 && imc < 29.9) {
    console.log('Você está sobrepeso');
}else if(imc >=30){
    console.log('Você está obeso');
}


const numeroA = 10;
const numeroB = 20;
const operação = '/';

let resultado;


if (operação === '+') {
    resultado = numeroA + numeroB;
} else if (operação === '-') {
    resultado = numeroA - numeroB;
} else if (operação === '*') {
    resultado = numeroA * numeroB;
} else if (operação === '/') {
    resultado = numeroA / numeroB;
}   
console.log(`O resultado da operação ${operação} entre ${numeroA} e ${numeroB} é: ${resultado}`);