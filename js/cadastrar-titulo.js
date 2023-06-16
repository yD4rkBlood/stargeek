listaFilmes = JSON.parse(localStorage.getItem('dataFilmes'));
if (listaFilmes == null) {
    listaFilmes = [];
}

function adicionarMidia() {
    var titulo = document.getElementById('titulo').value;
    var resumo = document.getElementById('resumo').value;
    var imagem = document.getElementById('imagem').value;

    if (!validarCadastro(titulo, resumo, imagem)) {
        document.getElementById('vazio').innerHTML = "<p class='vazio'>Título, Resumo e Imagem não podem estar vazios</p>";
        return;
    }

    var filmes = {
        titulo: titulo,
        resumo: resumo,
        imagem: imagem
    };

    listaFilmes.push(filmes);
    localStorage.setItem('dataFilmes', JSON.stringify(listaFilmes));

    window.location.href = "catalogo.html";
}

function validarCadastro(titulo, resumo, imagem) {
    return titulo !== '' && resumo !== '' && imagem !== '';
}
