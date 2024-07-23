let email_log = document.getElementById("email_login");
let senha_log = document.getElementById("senha_login");
let olho_log = document.getElementById("olho");
let termos_log = document.getElementById("termos_login");

let login = document.getElementById("login");

olho_log.addEventListener('click', function () {
    if (senha_log.type == "password") {
        senha_log.type = "text";
        senha_log.placeholder = "123456789";
    } else {
        senha_log.type = "password";
        senha_log.placeholder = "•••••••••";
    }
});

login.addEventListener('click', function (event) {
    event.preventDefault();
    let usuario = localStorage.getItem('usuario');
    if (usuario) {
        usuario = JSON.parse(usuario);
        if (usuario.email == email_log.value && usuario.senha == senha_log.value&&termos_log.checked) {
            window.location.href = 'home.html';
        } else {
            alert("Dados escritos incorretamente!");
        }
    } else {
        alert("Nenhum usuário registrado.");
    }
});