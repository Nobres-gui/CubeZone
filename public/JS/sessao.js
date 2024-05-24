// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardarLogin() {
    var divAguardar = document.getElementById("div_aguardarLogin");
    divAguardar.style.display = "flex";
}

function finalizarAguardarLogin(texto) {
    var divAguardar = document.getElementById("div_aguardarLogin");
    divAguardar.style.display = "none";

    // var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.style.display = "flex";
    //     divErrosLogin.innerHTML = texto;
    // }
}
function aguardarCadastro() {
    var divAguardar = document.getElementById("div_aguardarCadastro");
    divAguardar.style.display = "flex";
}

function finalizarAguardarLogin(texto) {
    var divAguardar = document.getElementById("div_aguardarCadastro");
    divAguardar.style.display = "none";

    // var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.style.display = "flex";
    //     divErrosLogin.innerHTML = texto;
    // }
}


