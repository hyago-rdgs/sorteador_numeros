function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let limite_min = parseInt(document.getElementById('de').value);
    let limite_max = parseInt(document.getElementById('ate').value);
    let lista_de_sorteados = [];
    
    let intervalo = limite_max - limite_min + 1;
    
    if (limite_max > limite_min && intervalo >= quantidade) {
        for (let i = 0; i < quantidade; i++) {
            let numero = numero_aleatorio(limite_min, limite_max);
            while (lista_de_sorteados.includes(numero)) {
                numero = numero_aleatorio(limite_min, limite_max)
            }
    
            lista_de_sorteados.push(numero);
        }
        document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${lista_de_sorteados}</label>`;
        
        inverter_status_botao("btn-reiniciar");
        inverter_status_botao("btn-sortear");     
    } else {
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Favor, informar um intervalo e quantidade de números válidos!</label>';
    }

   
}

function numero_aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    inverter_status_botao("btn-reiniciar");
    inverter_status_botao("btn-sortear");
}

function inverter_status_botao(btn_class){
    let btn = document.getElementById(btn_class);
    
    if (btn.classList.contains("container__botao-desabilitado")) {
        btn.classList.remove("container__botao-desabilitado");
        btn.classList.add("container__botao");

        btn.removeAttribute("disabled");
    } else {
        btn.classList.remove("container__botao");
        btn.classList.add("container__botao-desabilitado");

        btn.setAttribute("disabled", true);
    }
}