var registros = JSON.parse(localStorage.getItem('registrados'));
if (registros == null) {
    registros = [];
}

console.log(registros)

function Registrar() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    var registrar = {
        usuario: usuario,
        senha: senha,
        confirmarSenha: confirmarSenha
    };

    var podeAcessar = validarRegistro(usuario, senha, confirmarSenha);

    if (!podeAcessar) {
        document.getElementById('vazio').innerHTML = "<p class='vazio'>User, Password and Confirm password can't be empty</p>";
        return;
    }

    if (senha !== confirmarSenha) {
        document.getElementById('vazio').innerHTML = "<p class='vazio'>Password and Confirm Password are not the same</p>";
        return;
    }

    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmarSenha").value = "";

    document.getElementById('vazio').innerHTML = "";

    registros.push(registrar)
    localStorage.setItem('registrados', JSON.stringify(registros));

    usuariosRegistrados()
}


function validarRegistro(usuario, senha, confirmarSenha) {
    return usuario !== '' && senha !== '' && confirmarSenha !== '';
}

function usuariosRegistrados() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    var html = "";
    registros.forEach(item => {
        html = `<p class="bem-vindo">You are registered, Click on <a class="login" href="login.html">Login</a> to enter</p>`;
    });

    resultado.innerHTML = html;
}
