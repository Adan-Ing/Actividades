document.addEventListener("DOMContentLoaded", cargarTareas);

const inputTarea = document.getElementById("nuevaTarea");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");

agregarBtn.addEventListener("click", agregarTarea);
eliminarCompletadasBtn.addEventListener("click", eliminarTareasCompletadas);

function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardadas.forEach(tarea => {
        crearElementoTarea(tarea.texto, tarea.completada);
    });
    actualizarPendientes();
}

function agregarTarea() {
    const textoTarea = inputTarea.value.trim();
    if (textoTarea === "") {
        alert("Escribe una tarea");
        return;
    }

    crearElementoTarea(textoTarea, false);
    guardarTareas();
    inputTarea.value = ""; 
    actualizarPendientes();
}

function crearElementoTarea(texto, completada) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completada;
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
        guardarTareas();
        actualizarPendientes();
    });

    const span = document.createElement("span");
    span.textContent = texto;
    
    if (completada) {
        li.classList.add("completed");
    }

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.classList.add("eliminar");
    eliminarBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (confirm("¿Seguro que deseas eliminar esta tarea?")) {
            li.remove();
            guardarTareas();
            actualizarPendientes();
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(eliminarBtn);

    listaTareas.appendChild(li);
}


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
