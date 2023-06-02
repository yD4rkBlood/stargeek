var registros = JSON.parse(localStorage.getItem('registrados'));
if (registros == null) {
  registros = [];
}

console.log(registros);

function Confirmar() {
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  var encontrado = false;

  for (var i = 0; i < registros.length; i++) {
    if (usuario === registros[i].usuario && senha === registros[i].senha) {
      encontrado = true;
    }
  }

  if (!validarRegistro(usuario, senha)) {
    document.getElementById('vazio').innerHTML = "<p class='vazio'>Usuário e senha não podem estar vazios</p>";
    return;
  }

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (encontrado) {
    resultado.innerHTML = `<p class='bem-vindo'>Bem-vindo, Clique em <a class="catalog" href="catalogo.html">Catálogo</a> para entrar no Catálogo</p>`;
  } else {
    resultado.innerHTML = "<p class='errado'>Usuário ou senha incorretos</p>";
  }

  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";

  document.getElementById('vazio').innerHTML = "";
}

function validarRegistro(usuario, senha) {
  return usuario !== '' && senha !== '';
}
