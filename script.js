const avanca= document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.AddEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add('ativo');
    })
})