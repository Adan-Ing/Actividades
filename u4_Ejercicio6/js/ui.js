const catGrid = document.getElementById('catGrid');

const catImage = document.getElementById('catImage');
const catName = document.getElementById('catName');
const catTemperament = document.getElementById('catTemperament');
const catLifeSpan = document.getElementById('catLifeSpan');
const catDescription = document.getElementById('catDescription');
const childFriendly = document.getElementById('childFriendly');
const catFriendly = document.getElementById('catFriendly');
const origin = document.getElementById('origin');
const wikiLink = document.getElementById('wikiLink');

export function showBreeds(breeds){
    catGrid.innerHTML = ''; // Limpiar cuadrícula
    breeds.forEach(breed => {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');
        catCard.innerHTML = `
            <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.temperament || 'Temperamento no disponible'}</p>
            <a class="see-details-button" href="tarjeta.html?id=${breed.reference_image_id}" target="_blank">Ver detalles 
        `;
        catGrid.appendChild(catCard);
    });
}

export function updateButtons(currentPage, breedCount, limit){
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = breedCount < limit;
}



export function displayBreedDetails(breed){
    catImage.src= breed.url || 'https://via.placeholder.com/200';
    catName.textContent = breed.breeds[0]?.name || 'No disponible';
    catTemperament.textContent = breed.breeds[0]?.temperament || 'No disponible';
    catTemperament.textContent = breed.breeds[0]?.temperament || 'No disponible';
    catLifeSpan.textContent = breed.breeds[0]?.life_span || 'No disponible';
    catDescription.textContent = breed.breeds[0]?.description || 'No disponible';
    childFriendly.textContent = breed.breeds[0]?.child_friendly || 'No disponible';
    catFriendly.textContent = breed.breeds[0]?.dog_friendly || 'No disponible';
    origin.textContent = breed.breeds[0]?.origin || 'No disponible';
    wikiLink.href = breed.breeds[0]?.wikipedia_url || '#';
}
