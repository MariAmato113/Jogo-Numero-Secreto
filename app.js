
let listaNumerosSorteados = [];
let limiteNumerosLista = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativasContador = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentatica = tentativasContador > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativasContador} ${palavraTentatica}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O número secreto é Menor!');
        } else{
            exibirTextoNaTela('p', 'O número secreto é Maior!');
        }
        tentativasContador++;
        limparCampo();
    }

}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativasContador = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteNumerosLista + 1);
   let quantidadeElementosLista = listaNumerosSorteados.length;
   
   if (quantidadeElementosLista == limiteNumerosLista) {
    listaNumerosSorteados = [];
   }
   if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}