var listaFilmes = [];

listaFilmes = JSON.parse(localStorage.getItem('dataFilmes'));
if (listaFilmes == null) {
    listaFilmes = [];
}

console.log(listaFilmes);

var resultado = document.getElementById("resultado");
resultado.innerHTML = "";

function removerFilme(titulo) {
    listaFilmes = listaFilmes.filter(filme => filme.titulo !== titulo);
    localStorage.setItem('dataFilmes', JSON.stringify(listaFilmes));
    exibirFilmes();
}

function abrirModal(titulo, resumo) {
    var modal = document.getElementById("meuModal");
    var modalTitulo = document.getElementById("modal-titulo");
    var modalResumo = document.getElementById("modal-resumo");

    modalTitulo.textContent = titulo;
    modalResumo.textContent = resumo;

    var btnRemover = document.createElement("button");
    btnRemover.innerHTML = '<img src="img/trash-10-32.ico">';
    btnRemover.addEventListener("click", function () {
        removerFilme(titulo);
    });
    modalResumo.appendChild(btnRemover);
    btnRemover.classList.add("remover");

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("meuModal");
    modal.style.display = "none";
}

function exibirFilmes() {
    resultado.innerHTML = "";
    for (var i = 0; i < listaFilmes.length; i++) {
        var titulo = listaFilmes[i].titulo;
        var resumo = listaFilmes[i].resumo;
        resultado.innerHTML += `<img onclick="abrirModal('${titulo}', '${resumo}')" class="img-resultado" src="${listaFilmes[i].imagem}">`;
    }
}

exibirFilmes();

var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
    var modal = document.getElementById("meuModal");
    if (event.target === modal) {
        closeModal();
    }
});
