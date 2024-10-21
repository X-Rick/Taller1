const AnimeScopeImg = document.getElementById('AnimeScopeImg');
AnimeScopeImg.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirige a la página inicial
});


const animes = [
    {
        id: 1,
        titulo: 'dandadan',
        banner: 'https://a.storyblok.com/f/178900/1920x1080/fc9956de7a/dandadan-key-art-wide.png/m/1200x0/filters:quality(95)format(webp)',
        descripcion: 'La historia sigue a un par de estudiantes de secundaria, Momo Ayase y Ken Takakura, quienes descubren el mundo de los extraterrestres y los espíritus después de un encuentro sobrenatural...',
        capitulos: [
            { id: 1, titulo: 'Yo diría que así empieza el amor. ¿no crees?', url: 'https://terabox.com/sharing/embed?surl=2ZC_YcvIUnGp3yI6H0GMnw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=342618491994056&slid=' },
            { id: 2, titulo: 'Eso es un extraterrestre, ¿no?', url: 'https://terabox.com/sharing/embed?surl=G650AuCLkyrkNc-FjicC1g&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=728899725397728&slid=' },
            { id: 3, titulo: 'El choque de la abuela contra abuela', url: 'https://terabox.com/sharing/embed?surl=6O25PBHENKfEZPpZH3A4Lw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=199855654280950&slid=' }
        ]
    },
    {
        id: 2,
        titulo: 'Blue lock',
        banner: 'https://i.pinimg.com/originals/f4/d1/ef/f4d1efea7f94ddfe45c53f55a21ad7f5.jpg',
        descripcion: 'La historia sigue a Yoichi Isagi, un joven delantero con el sueño de convertirse en el mejor futbolista del mundo. Es seleccionado para participar en Blue Lock, un programa de entrenamiento radical diseñado para crear al mejor delantero de Japón mediante la competencia entre 300 jóvenes jugadores. El enfoque del programa es desarrollar el egoísmo y la ambición, buscando formar al jugador perfecto que pueda llevar a la selección nacional a ganar la Copa del Mundo.',
        capitulos: [
            { id: 1, titulo: 'Sueño', url: 'https://www.burstcloud.co/embed/embed/4849435f7bd2d746dfb1fe68e43246fb082f82ffa00c37e20f1cb52763176a7b/Blue L 1.mp4' },
            { id: 2, titulo: 'Mostruo', url: 'https://www.burstcloud.co/embed/embed/bb9e83c8230c8903675f8ab2321e2b9612a4dbca5582a3cf227e2387ce987a45/Blue 2.mp4' },
            { id: 3, titulo: 'El "cero" del futbol', url: 'https://terabox.com/sharing/embed?surl=Tx6VbY05aH-izMRXzP4omw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=194191266255555' }
        ]
    }
    // Agrega más animes aquí
];

function cargarAnime() {
    const urlParams = new URLSearchParams(window.location.search);

    const animeId = parseInt(urlParams.get('anime'));
    console.log(animeId);
    console.log(urlParams);
    const anime = animes.find(a => a.id === animeId);
    console.log(anime);
    if (anime) {
        document.getElementById('encabezado').innerHTML = `
            <img src="${anime.banner}" class="banner">
            <h3 class="titulo">${anime.titulo}</h3>
        `;
        document.getElementById('descripcion').textContent = anime.descripcion;

        const listaCapitulos = document.getElementById('listaCapitulos');
        listaCapitulos.innerHTML = '';
        anime.capitulos.forEach(cap => {
            const li = document.createElement('li');
            li.className = 'ListaA';
            li.innerHTML = `<a href="cap1.html?anime=${animeId}&capitulo=${cap.id}">${cap.titulo}</a>`;
            listaCapitulos.appendChild(li);
        });
    } else {
        alert('Anime no encontrado');
    }
}

window.onload = cargarAnime;