console.log('El archivo JavaScript está cargado correctamente.');

function cambiarColor(color) {
    document.body.style.backgroundColor = color;
    document.querySelector('.container').style.backgroundColor = color === 'white' ? 'white' : 'rgba(255, 255, 255, 0.8)';
}

