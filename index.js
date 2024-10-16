
const AnimeScopeImg = document.getElementById('AnimeScopeImg');
AnimeScopeImg.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth',
    });
})



// Array de diccionarios que contienen la imagen, título y descripción
const imag = [
    {
        imagen: 'https://a.storyblok.com/f/178900/1920x1080/fc9956de7a/dandadan-key-art-wide.png',
        titulo: 'Dandadan',
        descripcion: 'Un manga que combina lo sobrenatural, la comedia y la acción. La historia sigue a un par de estudiantes de secundaria, Momo Ayase y Ken Takakura, quienes descubren el mundo de los extraterrestres y los espíritus después de un encuentro sobrenatural. Momo cree en fantasmas, mientras que Ken cree en extraterrestres. La trama se desenvuelve en torno a su lucha contra estas entidades y la creciente amistad entre ambos'
    },
    {
        imagen: 'https://akiraseihin.pe/wp-content/uploads/2023/05/BANNER-BLUELOCK-2.webp',
        titulo: 'Blue Lock',
        descripcion: 'Un manga de deportes que gira en torno al fútbol. La historia comienza después de que la selección japonesa de fútbol no logra llegar al Mundial. Para crear al mejor delantero, el gobierno japonés establece el programa "Blue Lock", que reúne a 300 jóvenes talentos para participar en un intenso entrenamiento. Solo uno será coronado como el mejor delantero, mientras que los perdedores no podrán representar a Japón. El protagonista, Yoichi Isagi, se une al programa con la esperanza de superar sus propias limitaciones.'
    },
    {
        imagen: 'https://es.dragon-ball-official.com/dragonball/es/news/2023/10/13/n231013000-1en.jpg',
        titulo: 'Dragon Ball',
        descripcion: ' Un nuevo proyecto de "Dragon Ball" que se lanzará en 2024. En esta historia, Goku y otros personajes emblemáticos son transformados en versiones más jóvenes de sí mismos. La trama explorará nuevas aventuras y desafíos mientras los personajes buscan revertir esta transformación. Se espera que la serie mantenga el estilo de acción característico de "Dragon Ball", con un enfoque renovado en la nostalgia y la diversión.'
    }
];

const carouselSlide = document.getElementById('carousel-slide');
const carouselTxt = document.getElementById('carrusel-txt');
let currentIndex = 0;

// Función para actualizar la imagen de fondo, el título y la descripción
function updateSlide(index) {
    carouselSlide.style.backgroundImage = `url(${imag[index].imagen})`;
    carouselTxt.querySelector('h3').innerHTML = `<h3>${imag[index].titulo}</h3>`;
    carouselTxt.querySelector('p').innerHTML = `<p>${imag[index].descripcion}</p>`;
}

// Función para ir a la siguiente diapositiva
function sigSlide() {
    currentIndex = (currentIndex + 1) % imag.length;
    updateSlide(currentIndex);
}

// Función para ir a la diapositiva anterior
function antSlide() {
    currentIndex = (currentIndex - 1 + imag.length) % imag.length; //el % se usa para que siempre el valor sea redondo, es decir, si se pasa la ultima a la primera, o de la primera pasa a la ultima
    updateSlide(currentIndex);
}


document.querySelector('.next').addEventListener('click', sigSlide);
document.querySelector('.prev').addEventListener('click', antSlide);


updateSlide(currentIndex);
