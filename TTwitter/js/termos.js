let pagina = document.getElementById("pagina");
let termos = document.getElementById("termos");
let condicoes = document.getElementById("condicoes");
let termos_box = document.getElementById("termos_box");
let condicoes_box = document.getElementById("condicoes_box");
let fechar_termos = document.getElementById('fechar_termos');
let fechar_condicoes = document.getElementById('fechar_condicoes');

termos.addEventListener('click', function () {
    pagina.classList.add('desativa');
    termos_box.classList.add('visivel');
});

condicoes.addEventListener('click',function(){
    pagina.classList.add('desativa');
    condicoes_box.classList.add('visivel');
});

fechar_termos.addEventListener('click',function(){
    pagina.classList.remove('desativa');
    termos_box.classList.remove('visivel');
})

fechar_condicoes.addEventListener('click',function(){
    pagina.classList.remove('desativa');
    condicoes_box.classList.remove('visivel');
});