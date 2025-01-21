let amigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById("amigo").value;
    if (nombreDeAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreDeAmigo);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    }