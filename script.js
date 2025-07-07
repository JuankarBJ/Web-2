const totalImagenes =3;

let imagenActual = 1;

function cambiarImagen() {
    // 1. Obtenemos el elemento de la imagen
    const imagen = document.getElementById('miImagen');

    // 2. Verificamos si el 'src' actual CONTIENE el nombre de la primera imagen
    if (imagen.src.includes('img_1.png')) {
        // Si es la imagen 1, la cambiamos por la imagen 2
        imagen.src = 'media/img/img_2.png';
        imagen.alt = 'Imagen 2';
    } else {
        // Si no, significa que es la imagen 2, así que la regresamos a la 1
        imagen.src = 'media/img/img_1.png';
        imagen.alt = 'Imagen 1';
    }
    const console = document.getElementById('console');
    console.innerHTML =(imagen.src)
}
function moverImagen(direccion) {
    imagenActual += direccion

    if (imagenActual > totalImagenes) {
        imagenActual = 1;
    }

    if (imagenActual < 1) {
        imagenActual = totalImagenes;
    }

    actualizarImagen();
}

function actualizarImagen() {
    const imagen = document.getElementById('miImagen');
    imagen.src = `media/img/img_${imagenActual}.png`;
    imagen.alt = `Imagen ${imagenActual}.png`;
    const console = document.getElementById('console');
    console.innerHTML = imagenActual;
}

// --- NUEVO CÓDIGO PARA EL MENÚ DESPLEGABLE ---

// 1. Seleccionamos el botón que controla el desplegable
const botonDesplegable = document.querySelector('.boton-desplegable');

// 2. Añadimos un "escuchador de eventos" para el clic
botonDesplegable.addEventListener('click', () => {
    // 3. Buscamos el elemento padre (el <li> con la clase 'desplegable')
    const itemDesplegable = botonDesplegable.parentElement;
    
    // 4. "Alternamos" la clase 'activo'. 
    // Si la tiene, se la quita. Si no la tiene, se la pone.
    itemDesplegable.classList.toggle('activo');
});

// --- NUEVO CÓDIGO PARA EL MENÚ EN MÓVILES ---

// 1. Seleccionamos los nuevos elementos
const botonMenu = document.getElementById('boton-menu');
const barraLateral = document.querySelector('.barra-lateral');

// 2. Añadimos un escuchador de eventos al botón de hamburguesa
botonMenu.addEventListener('click', () => {
    // 3. Alternamos la clase 'abierta' en la barra lateral
    barraLateral.classList.toggle('abierta');
});