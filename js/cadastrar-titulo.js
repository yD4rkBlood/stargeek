function adicionarMidia() {
    var titulo = document.getElementById('titulo').value;
    var resumo = document.getElementById('resumo').value;
    var imagem = document.getElementById('imagem').value;

    if (!validarCadastro(titulo, resumo, imagem)) {
        document.getElementById('vazio').innerHTML = "<p class='vazio'>Título, Resumo e Imagem não podem estar vazios</p>";
        return;
    }
}



function validarCadastro(titulo, resumo, imagem) {
    return titulo !== '' && resumo !== '' && imagem !== '';
}