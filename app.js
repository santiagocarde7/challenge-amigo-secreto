let amigos = [];

function agregarAmigo(){
let amigoNuevo = document.querySelector("#amigo").value.trim();
if(amigoNuevo == ""){
    alert("Por favor, inserte un nombre");
}else {
    if(amigos.includes(amigoNuevo)){
        alert("Este amigo ya esta en la lista");
    }else{
        amigos.push(amigoNuevo);
        console.log(amigos.length);
        actualizarLista();
        limpiarCaja();
    }
}}

function sortearAmigo(){
    numero = Math.floor(Math.random()*amigos.length);
    if (amigos == ""){
        alert("no hay amigos para sortear");
    }else{
    let amigoSorteado = document.getElementById("resultado")
    amigoSorteado.textContent = amigos[numero]};


}


 function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista antes de agregar elementos

    for (let i = 0; i < amigos.length; i++) {
        // Creamos un elemento <li> para cada amigo
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i]; // Asignamos el nombre del amigo como texto del elemento

        lista.appendChild(nuevoElemento); // Agregamos el elemento <li> a la lista
    }
}