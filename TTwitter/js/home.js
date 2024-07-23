let username = document.getElementById("username");
let texto = document.getElementById("texto");
let usuario = localStorage.getItem('usuario');
usuario = JSON.parse(usuario);
username.innerHTML = `@${usuario.nome}`;

window.addEventListener('resize', function () {
    if (window.innerWidth <= 360) {
        texto.innerHTML = "Talvez você conheça";
    }
});

let emoji_label = document.getElementById("emoji_label");
let emojis = document.getElementById("emojis");

emoji_label.addEventListener('click', () => {
    emojis.style.display = emojis.style.display === 'none' ? 'flex' : 'none';
});

/*
function deslogar() { }

function adcionar() { }

function post() { }
*/