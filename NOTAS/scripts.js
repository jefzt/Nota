const btn = document.getElementById("btnAgregar");

btn.addEventListener("click", function () {

    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;

    if (titulo === "" || contenido === "") {
        return;
    }

    const nota = document.createElement("div");
    nota.classList.add("nota");

    const h3 = document.createElement("h3");
    h3.textContent = titulo;

    const p = document.createElement("p");
    p.textContent = contenido;

    const btnImportante = document.createElement("button");
    btnImportante.textContent = "🌟";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "🗑";

    btnImportante.onclick = function () {
        nota.classList.toggle("importante");
    };

    btnEliminar.onclick = function () {
        nota.remove();
    };

    nota.appendChild(h3);
    nota.appendChild(p);
    nota.appendChild(btnImportante);
    nota.appendChild(btnEliminar);

    document.getElementById("listaNotas").appendChild(nota);

    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";
});