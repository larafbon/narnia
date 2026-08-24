const botoes = document.querySelectorAll('.btn-proximo');

botoes.forEach(botao => {

    botao.addEventListener('click', function() {

        // Encontra o passo atual
        const passoAtual = document.querySelector('.passo.ativo');

        // Pega o próximo passo indicado no botão
        const proximo = "passo-" + this.getAttribute('data-proximo');

        // Remove o passo atual
        passoAtual.classList.remove('ativo');

        // Mostra o próximo passo
        document.getElementById(proximo).classList.add('ativo');

    });

});