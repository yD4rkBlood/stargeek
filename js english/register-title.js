function adicionarMidia() {
    var titulo = document.getElementById('titulo').value;
    var resumo = document.getElementById('resumo').value;
    var imagem = document.getElementById('imagem').value;

    if (!validarCadastro(titulo, resumo, imagem)) {
        document.getElementById('vazio').innerHTML = "<p class='vazio'>Title, Summary and Image can't be empty</p>";
        return;
    }
}



function validarCadastro(titulo, resumo, imagem) {
    return titulo !== '' && resumo !== '' && imagem !== '';
}