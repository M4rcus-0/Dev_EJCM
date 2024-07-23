let nome_reg = document.getElementById("nome_registro");
let email_reg = document.getElementById("email_registro");
let data_nascimento_reg = document.getElementById("data_nascimento_registro");
let olho1_reg = document.getElementById("olho1");
let senha1_reg = document.getElementById("senha_registro");
let olho2_reg = document.getElementById("olho2");
let senha2_reg = document.getElementById("confirmacao_registro");
let checkbox_reg = document.getElementById("termos_registro");
let cadastro = document.getElementById("cadastro");

cadastro.addEventListener('click',  function(event) {
    event.preventDefault();
    if (nome_reg.value && email_reg.value && data_nascimento_reg.value && senha1_reg.value && senha2_reg.value && checkbox_reg.checked && (senha1_reg.value === senha2_reg.value)) {
        const usuario = {
            nome: nome_reg.value,
            email: email_reg.value,
            data_nascimento: data_nascimento_reg.value,
            senha: senha1_reg.value,
        };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.href = 'login.html';
    } else {
        alert("Preencha o formulário corretamente!");
    }
});

olho1_reg.addEventListener('click', function () {
    if (senha1_reg.type == "password") {
        senha1_reg.type = "text";
        senha1_reg.placeholder = "123456789";
    } else {
        senha1_reg.type = "password";
        senha1_reg.placeholder = "•••••••••";
    }
});

olho2_reg.addEventListener('click', function () {
    if (senha2_reg.type == "password") {
        senha2_reg.type = "text";
        senha2_reg.placeholder = "123456789";
    } else {
        senha2_reg.type = "password";
        senha2_reg.placeholder = "•••••••••";
    }
});