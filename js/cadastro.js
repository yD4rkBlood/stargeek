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
        document.getElementById('vazio').innerHTML = "<p class='vazio'>Usuario, Senha e Confirmar Senha não podem estar vazios</p>";
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
        html = `<p class="bem-vindo">Você foi registrado, Clique em <a class="login" href="login.html">Login</a> para entrar</p>`;
    });

    resultado.innerHTML = html;
}
