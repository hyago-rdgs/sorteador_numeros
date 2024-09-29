let botao = document.getElementById('btn-reiniciar');

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let limite_min = parseInt(document.getElementById('de').value);
    let limite_max = parseInt(document.getElementById('ate').value);

    let lista_de_sorteados = [];
    
    for (let i = 0; i < quantidade; i++) {
        let numero = numero_aleatorio(limite_min, limite_max);
        while (lista_de_sorteados.includes(numero)) {
            numero = numero_aleatorio(limite_min, limite_max)
        }

        lista_de_sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${lista_de_sorteados}</label>`;
    
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
}
function numero_aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}