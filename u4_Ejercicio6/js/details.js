import { getBreedDetails } from "./api.js";
import { displayBreedDetails } from "./ui.js";

const breedId = new URLSearchParams(window.location.search).get('id');

async function cargarGato(id) {
    
        const breedDetails = await getBreedDetails(id);
        console.log(breedDetails)
        if (breedDetails) {
            displayBreedDetails(breedDetails);
        } else {
            console.error("No se encontraron detalles para la raza con el ID proporcionado.");
        }
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("ID obtenido de la URL:", breedId);
    cargarGato(breedId);
});

