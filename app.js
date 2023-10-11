let listaNumerosSorteados = [];
let limiteLista = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemReiniciarJogo(){
    exibirTextoNaTela('h1',  'Hora do Desafio');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 50');
}

mensagemReiniciarJogo();

function verificarChute(){
    //guardando valor do chute
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Voce acertou');
        let numeroTentativas  = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto, com ${tentativas} ${numeroTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        //Buscando a funcao reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', 'O numero e maior.');
        }else{
            exibirTextoNaTela('p', 'O numero e menor.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numerosEscolhidos = parseInt(Math.random() * limiteLista + 1);
    //incluindo e comparando o valor sorteado para que nao se repita 
    let quantidadeElementoLista = listaNumerosSorteados.length;

    if(quantidadeElementoLista == limiteLista){
        listaNumerosSorteados = [];
    }


    if(listaNumerosSorteados.includes(numerosEscolhidos)){
        gerarNumeroAleatorio();
    }else{
        //adicionado o numero ao final da lista 
        listaNumerosSorteados.push(numerosEscolhidos);
        console.log(listaNumerosSorteados);
        return numerosEscolhidos;
    }
}

//funcao limpar input
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemReiniciarJogo();
    //desabilitando o button novo jogo e reiniciando o jogo
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


/*


EX1
function exibirTextoNaTela() {
    console.log('Ola Mundo!');
}

exibirTextoNaTela();
*/

/*
let nome = prompt('Qual seu nome?');

function exibirNome(nome) {
    console.log(`Ola, ${nome}!`);
}

exibirNome(nome);
*/

/*
let valor1 = prompt('Digite um valor: ');

function dobroValor(num1) {
    return  num1 * 2;
}

console.log(dobroValor(valor1));
*/

/*
let valor1 = parseInt(prompt('Digite um valor: '));
let valor2 = parseInt(prompt('Digite outro valor: '));
let valor3 = parseFloat(prompt('Digite mais um valor: '));

function mediaValor(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

console.log(mediaValor(valor1, valor2, valor3));
*/

/*
let valor1 = prompt('Digite um numero: ');
let valor2 = prompt('Digite um outro numero: ');

function maiorValor(num1, num2){
    if(num1 == num2){
        return console.log(`Os numeros sao iguais =) : ${num1} e ${num2}`);
    }else{
        if(num1 > num2){
            return console.log(`Este e o numero maior: ${num1}`);
        }else{1
            return console.log(`Este e o numero maior:  ${num2}`);
        }
    }
}

console.log(maiorValor(valor1, valor2));

*/
/*
let valor1 = prompt('Digite um numero:');

function multiplicarValor(num1){
    return num1 * num1;
}
*/
/*
console.log(multiplicarValor(valor1));
*/
/*
let num1 = prompt('valor 1:');
let num2 = prompt('Valor 2:');

soma = parseInt(num1) + parseInt(num2);

alert(soma);

function verificarCidade(){
    //Para fazer uma soma deve-se saber que o valor num1.. seja declarado como numero inteiro
    let num1 = parseInt(prompt('Digite um valor:'));
    let num2 = parseInt(prompt('Digite outro valor:'));

    let tipoSoma;

    while(tipoSoma !== '+', '-', '/', '*'){
        tipoSoma = prompt('Como voce quer soma: + - / *');
        
        if(tipoSoma == '+'){
            valorAdicao = num1 + num2;
            alert(`Somando ${num1} + ${num2}, o resultado e ${valorAdicao}`);
        }else{
            if(tipoSoma == '-'){
                valorSubtracao = num1 - num2;
                alert(`Somando ${num1} - ${num2}, o resultado e ${valorSubtracao}`);
            }else{
                if(tipoSoma == '/'){
                    valorDivisao = num1 / num2;
                    alert(`Somando ${num1} / ${num2}, o resultado e ${valorDivisao}`);
                }else{
                    if(tipoSoma == '*'){
                        valorMultiplicar = num1 * num2;
                        alert(`Somando ${num1} * ${num2}, o resultado e ${valorMultiplicar}`);
                    }
                }
            }
        }
        break
    }
}
*/

