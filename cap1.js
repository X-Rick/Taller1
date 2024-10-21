const AnimeScopeImg = document.getElementById('AnimeScopeImg');
AnimeScopeImg.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirige a la página inicial
});




const animes = [
    {
        id:1,
        titulo: 'dandadan',
        banner: 'https://a.storyblok.com/f/178900/1920x1080/fc9956de7a/dandadan-key-art-wide.png/m/1200x0/filters:quality(95)format(webp)',
        capitulos: [
        {id: 1,titulo: 'Yo diría que así empieza el amor. ¿no crees?',url: 'https://terabox.com/sharing/embed?surl=2ZC_YcvIUnGp3yI6H0GMnw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=342618491994056&slid='},
        {id:2,titulo: 'Eso es un extraterreste, ¿no?',url: 'https://terabox.com/sharing/embed?surl=G650AuCLkyrkNc-FjicC1g&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=728899725397728&slid='},
        {id:3, titulo:'El choque de la abuela contra abuela',url: 'https://terabox.com/sharing/embed?surl=6O25PBHENKfEZPpZH3A4Lw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=199855654280950&slid='},
]},
    {
        id: 2,
        titulo: 'Blue lock',
        banner: 'https://i.pinimg.com/originals/f4/d1/ef/f4d1efea7f94ddfe45c53f55a21ad7f5.jpg',
        descripcion: 'La historia sigue a Yoichi Isagi, un joven delantero con el sueño de convertirse en el mejor futbolista del mundo. Es seleccionado para participar en Blue Lock, un programa de entrenamiento radical diseñado para crear al mejor delantero de Japón mediante la competencia entre 300 jóvenes jugadores. El enfoque del programa es desarrollar el egoísmo y la ambición, buscando formar al jugador perfecto que pueda llevar a la selección nacional a ganar la Copa del Mundo.',
        capitulos: [
            { id: 1, titulo: 'Sueño', url: 'https://terabox.com/sharing/embed?surl=2VHC7KNcq1JOlF8Avh8-SQ&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=500575841028806'},
            { id: 2, titulo: 'Mostruo', url: 'https://terabox.com/sharing/embed?surl=V3H7PrRC_PPQO9DkXmA1LQ&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=844910741984821' },
            { id: 3, titulo: 'El "cero" del futbol', url: 'https://terabox.com/sharing/embed?surl=Tx6VbY05aH-izMRXzP4omw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=194191266255555' }
        ]
    },
    {
        id:3,
        titulo:'Kimetsu no yaiba',
        banner:'https://64.media.tumblr.com/3733d7d050f4a3b451fec11bf50b9313/56c887f981fd3920-ff/s1280x1920/723c452386712a873d0d0456fefbcdcb6f84e597.jpg',
        capitulos: [
            {id:1,titulo:'hola1',url:'https://www.burstcloud.co/embed/facee5d33a40594268a7dea0ad59ddf8bc94ee36a83942acf5ec2201bcba879a/Kimetsu 1.mp4'},
            {id:2,titulo:'hola2',url:'https://www.burstcloud.co/embed/3904c8ad5e38c6a3932ac75e0f1c4402d2bed7be33b89743e19667188a32c170/Kimetsu 2.mp4'},
            {id:3,titulo:'hola3',url:'https://www.burstcloud.co/embed/c217778c5dd1f67daabca970a34bc90fb8ca029e560f5da2d69e7defab4f4839/Kimetsu 3.mp4'}
    ]
    }
];

function cargarCapitulo() {

    const urlParams = new URLSearchParams(window.location.search);
    const animeId = parseInt(urlParams.get('anime'));
    const capituloId = parseInt(urlParams.get('capitulo'));

    const anime = animes.find(a => a.id === animeId);
    if (anime) {
        const capitulo = anime.capitulos.find(c => c.id === capituloId);
        if (capitulo) {
            document.getElementById('reprod').innerHTML = `
                <iframe src="${capitulo.url}" class="iframeVid"></iframe>
                <h3>${capitulo.titulo}</h3>
            `;
            // Configuración de los botones
            document.getElementById('epi').onclick = () => window.location.href = `anime.html?anime=${animeId}`;
            const siguienteCapitulo = anime.capitulos.find(c => c.id === capituloId + 1);
            if (siguienteCapitulo) {
                document.getElementById('sig').onclick = () => window.location.href = `cap1.html?anime=${animeId}&capitulo=${capituloId + 1}`;
            } else {
                document.getElementById('sig').disabled = true;
            }
        } else {
            alert('Capítulo no encontrado');
        }
    } else {
        alert('Anime no encontrado');
    }
}

cargarCapitulo();