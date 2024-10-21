const AnimeScopeImg = document.getElementById('AnimeScopeImg');
AnimeScopeImg.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirige a la página inicial
});




const animes = [
    {
        id:1,
        capitulos: [
        {id: 1,titulo: 'Yo diría que así empieza el amor. ¿no crees?',url: 'https://terabox.com/sharing/embed?surl=2ZC_YcvIUnGp3yI6H0GMnw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=342618491994056&slid='},
        {id:2,titulo: 'Eso es un extraterreste, ¿no?',url: 'https://terabox.com/sharing/embed?surl=G650AuCLkyrkNc-FjicC1g&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=728899725397728&slid='},
        {id:3, titulo:'El choque de la abuela contra abuela',url: 'https://terabox.com/sharing/embed?surl=6O25PBHENKfEZPpZH3A4Lw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=199855654280950&slid='},
]},
    {
        id: 2,
        capitulos: [
            { id: 1, titulo: 'Sueño', url: 'https://terabox.com/sharing/embed?surl=2VHC7KNcq1JOlF8Avh8-SQ&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=500575841028806'},
            { id: 2, titulo: 'Monstruo', url: 'https://terabox.com/sharing/embed?surl=V3H7PrRC_PPQO9DkXmA1LQ&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=844910741984821' },
            { id: 3, titulo: 'El "cero" del futbol', url: 'https://terabox.com/sharing/embed?surl=Tx6VbY05aH-izMRXzP4omw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=194191266255555' }
        ]
    },
    {
        id:3,
        capitulos: [
            {id:1,titulo:'Crueldad',url:'https://www.burstcloud.co/embed/facee5d33a40594268a7dea0ad59ddf8bc94ee36a83942acf5ec2201bcba879a/Kimetsu 1.mp4'},
            {id:2,titulo:'El instructor, Sakonji Urokodaki',url:'https://www.burstcloud.co/embed/3904c8ad5e38c6a3932ac75e0f1c4402d2bed7be33b89743e19667188a32c170/Kimetsu 2.mp4'},
            {id:3,titulo:'Sabito y Makomo',url:'https://www.burstcloud.co/embed/c217778c5dd1f67daabca970a34bc90fb8ca029e560f5da2d69e7defab4f4839/Kimetsu 3.mp4'}
    ]
    },
    {
        id:4,
        capitulos: [
            {id:1,titulo:'Un perro y una motosierra',url:'https://terabox.com/sharing/embed?surl=HBsRAawHbCRC9SlUnTE5qQ&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=427973918723676'},
            {id:2,titulo:'Llegada a Tokio',url:'https://terabox.com/sharing/embed?surl=upOw0KCYxPaKxgiMnwn3Lw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=423232013124701'},
            {id:3,titulo:'El paradero de Nyako',url:'https://terabox.com/sharing/embed?surl=1p9QVeNFYRSMcopbeX6Meg&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=30452248147497'}
        ]

    },
    {
        id:5,
        capitulos: [
            {id:1,titulo:'El día que me convertí en Shinigami',url:'https://www.burstcloud.co/embed/1f108a053d97bba9f3d3d4aa61b873cfccc848e7e0917c1e7fe299d762e549d2/Bleach (1).mp4'},
            {id:2,titulo:'Trabajo de Shinigami',url:'https://www.burstcloud.co/embed/16bf901d8ebe110883a929fb10e39c1d86805854e55ce121c28676e0714654c7/Bleach (2).mp4'},
            {id:3,titulo:'Deseo del hermano mayor, deseo de la hermana pequeña',url:'https://www.burstcloud.co/embed/2fc1eb0205d3a4a9f8bce4ad7c2043c7ac03d76e950c514625c7c56ae85c123c/Bleach (3).mp4'}
        ]

    },
    {
        id:6,
        capitulos: [
            {id:1,titulo:'¡Entra! ¡Naruto Uzumaki!',url:'https://www.mp4upload.com/embed-m8lo6lo5ht9j.html'},
            {id:2,titulo:'¡Mi Nombre es Konohamaru!',url:'https://www.mp4upload.com/embed-i7820sra3tso.html'},
            {id:3,titulo:'Sasuke y Sakura: ¡¿Amigos o Enemigos?!',url:'https://www.mp4upload.com/embed-dugdfifjhuk9.html'}
        ]

    },
    {
        id:7,
        capitulos: [
            {id:1,titulo:'Aparece un mini Gokū! Son Gohan!',url:'https://www.mp4upload.com/embed-7l183ynqedvz.html'},
            {id:2,titulo:'¡El guerrero más fuerte de la historia era el hermano de Gokū!',url:'https://www.mp4upload.com/embed-16nrn2ak3v0d.html'},
            {id:3,titulo:'¡Lo hemos conseguido! Este es el mejor dúo del mundo',url:'https://www.mp4upload.com/embed-f9zbaijja7ud.html'}
        ]

    },
    {
        id:8,
        capitulos: [
            {id:1,titulo:'Sukuna de la Doble cara',url:'https://www.mp4upload.com/embed-ludw7a0smm25.html'},
            {id:2,titulo:'Por mí',url:'https://www.mp4upload.com/embed-aqqtgptvnicm.html'},
            {id:3,titulo:'Chica de acero',url:'https://www.mp4upload.com/embed-doxkv0gmpaam.html'}
        ]

    },
    {
        id:9,
        capitulos: [
            {id:1,titulo:'¡¡Perfora los cielos con tu taladro!!',url:'https://terabox.com/sharing/embed?surl=i25pfladkvj5'},
            {id:2,titulo:'¡¡He dicho que yo lo piloto!!',url:'https://terabox.com/sharing/embed?surl=zk35m1y2g1nb'},
            {id:3,titulo:'¡¡Dos-caras, no me subestimes!!',url:'https://terabox.com/sharing/embed?surl=uj08g4f8lwgc'}
        ]

    },
    {
        id:10,
        capitulos: [
            {id:1,titulo:'Shinra Kusakabe se enlista',url:'https://www.mp4upload.com/embed-wsh7taqte1i4.html'},
            {id:2,titulo:'Corazón de soldado de fuego',url:'https://www.mp4upload.com/embed-p10h500avshk.html'},
            {id:3,titulo:'Juegos de novatos',url:'https://www.mp4upload.com/embed-luszw46gq3d3.html'}
        ]

    },


];

function cargarCapitulo() {

    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const animeId = parseInt(urlParams.get('anime'));
    const capituloId = parseInt(urlParams.get('capitulo'));

    const anime = animes.find(a => a.id === animeId);
    if (anime) {
        const capitulo = anime.capitulos.find(c => c.id === capituloId);
        if (capitulo) {
            document.getElementById('reprod').innerHTML = `
                <h3 class="tituVid">${capitulo.titulo}</h3>
                <iframe src="${capitulo.url}" class="iframeVid"></iframe>
                
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