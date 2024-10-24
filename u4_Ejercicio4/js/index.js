document.addEventListener("DOMContentLoaded", cargarTareas);

// Referencias a los elementos HTML
const inputTarea = document.getElementById("nuevaTarea");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");

// Evento para agregar una nueva tarea
agregarBtn.addEventListener("click", agregarTarea);

// Cargar las tareas guardadas desde localStorage
function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardadas.forEach(tarea => {
        crearElementoTarea(tarea.texto, tarea.completada);
    });
}

// Agregar una nueva tarea
function agregarTarea() {
    const textoTarea = inputTarea.value.trim();
    if (textoTarea === "") {
        alert("Escribe una tarea");
        return;
    }

    crearElementoTarea(textoTarea, false);
    guardarTareas();
    inputTarea.value = ""; // Limpiar el campo de texto
}

// Crear un elemento de tarea en el DOM
function crearElementoTarea(texto, completada) {
    const li = document.createElement("li");
    if (completada) {
        li.classList.add("completed");
    }

    li.innerHTML = `
        <span>${texto}</span>
        <div>
            <button class="eliminar">Eliminar</button>
        </div>
    `;

    // Marcar tarea como completada
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        guardarTareas();
    });

    // Eliminar tarea
    li.querySelector(".eliminar").addEventListener("click", function (e) {
        e.stopPropagation(); // Evita marcar como completada cuando se elimina
        li.remove();
        guardarTareas();
    });

    listaTareas.appendChild(li);
}

// Guardar las tareas en localStorage
function guardarTareas() {
    const tareas = [];
    document.querySelectorAll("#listaTareas li").forEach(li => {
        tareas.push({
            texto: li.querySelector("span").textContent,
            completada: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
}
