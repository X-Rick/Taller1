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
    },
    {
        id:3,
        titulo:'Kimetsu no yaiba',
        descripcion: 'La historia sigue a Tanjiro Kamado, un joven bondadoso que se convierte en cazador de demonios después de que su familia es brutalmente asesinada por demonios y su hermana Nezuko es transformada en uno de ellos. Tanjiro emprende un viaje para encontrar una cura para Nezuko y vengar a su familia, enfrentándose a poderosos demonios y uniéndose a otros cazadores en su lucha. La serie es conocida por su animación impresionante, personajes profundos y emocionantes escenas de batalla.',
        banner:'https://64.media.tumblr.com/3733d7d050f4a3b451fec11bf50b9313/56c887f981fd3920-ff/s1280x1920/723c452386712a873d0d0456fefbcdcb6f84e597.jpg',
        capitulos: [
            {id:1,titulo:'Crueldad',url:'https://www.burstcloud.co/embed/facee5d33a40594268a7dea0ad59ddf8bc94ee36a83942acf5ec2201bcba879a/Kimetsu 1.mp4'},
            {id:2,titulo:'El instructor, Sakonji Urokodaki',url:'https://www.burstcloud.co/embed/3904c8ad5e38c6a3932ac75e0f1c4402d2bed7be33b89743e19667188a32c170/Kimetsu 2.mp4'},
            {id:3,titulo:'Sabito y Makomo',url:'https://www.burstcloud.co/embed/c217778c5dd1f67daabca970a34bc90fb8ca029e560f5da2d69e7defab4f4839/Kimetsu 3.mp4'}
    ]
    },
    {
        id:4,
        titulo: 'Chainsaw Man',
        descripcion: ' La historia sigue a Denji, un joven que vive en la pobreza y trabaja como cazador de demonios para pagar las deudas de su difunto padre. Después de una serie de eventos trágicos, Denji se fusiona con su mascota demonio, Pochita, convirtiéndose en Chainsaw Man, un ser capaz de transformar partes de su cuerpo en motosierras. A lo largo de la serie, Denji se enfrenta a diversos demonios y otros cazadores mientras busca una vida mejor, amor y una razón para vivir.',
        banner:' https://4kwallpapers.com/images/wallpapers/denji-chainsaw-man-manga-series-3840x1080-8869.jpg   ',
        capitulos: [
            {id:1,titulo:'Un perro y una motosierra',url:'https://terabox.com/sharing/embed?surl=HBsRAawHbCRC9SlUnTE5qQ&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=427973918723676'},
            {id:2,titulo:'Llegada a Tokio',url:'https://terabox.com/sharing/embed?surl=upOw0KCYxPaKxgiMnwn3Lw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=423232013124701'},
            {id:3,titulo:'El paradero de Nyako',url:'https://terabox.com/sharing/embed?surl=1p9QVeNFYRSMcopbeX6Meg&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=30452248147497'}
        ]

    },
    {
        id:5,
        titulo: 'bleach', 
        descripcion: 'Bleach es un manga y anime creado por Tite Kubo, que sigue las aventuras de Ichigo Kurosaki, un adolescente que adquiere poderes de Shinigami (dios de la muerte) después de un encuentro con Rukia Kuchiki, una Shinigami que le transfiere sus habilidades para salvar a su familia de un espíritu maligno conocido como Hollow. A partir de ese momento, Ichigo se ve envuelto en la lucha contra seres sobrenaturales, enfrentándose a Hollows, otros Shinigami y poderosos enemigos para proteger tanto el mundo humano como la Sociedad de Almas. La serie es famosa por sus intensas batallas, transformaciones y su variado elenco de personajes.',
        banner:'https://images.nightcafe.studio/jobs/AmlY2TA9zrjIpae1fJ91/AmlY2TA9zrjIpae1fJ91--1--anm7e.jpg?tr=w-1600,c-at_max',
        capitulos: [
            {id:1,titulo:'El día que me convertí en Shinigami',url:'https://www.burstcloud.co/embed/1f108a053d97bba9f3d3d4aa61b873cfccc848e7e0917c1e7fe299d762e549d2/Bleach (1).mp4'},
            {id:2,titulo:'Trabajo de Shinigami',url:'https://www.burstcloud.co/embed/16bf901d8ebe110883a929fb10e39c1d86805854e55ce121c28676e0714654c7/Bleach (2).mp4'},
            {id:3,titulo:'Deseo del hermano mayor, deseo de la hermana pequeña',url:'https://www.burstcloud.co/embed/2fc1eb0205d3a4a9f8bce4ad7c2043c7ac03d76e950c514625c7c56ae85c123c/Bleach (3).mp4'}
        ]

    },
    {
        id:6,
        titulo: 'Naruto',
        descripcion: 'Naruto es un manga y anime creado por Masashi Kishimoto que sigue la historia de Naruto Uzumaki, un joven ninja que aspira a convertirse en el Hokage, el líder de su aldea, la Aldea Oculta de la Hoja (Konohagakure). Desde pequeño, Naruto ha sido marginado y despreciado por sus compañeros debido a que lleva dentro de él al Zorro de Nueve Colas, un poderoso demonio que destruyó la aldea años atrás.',
        banner:'https://i.pinimg.com/736x/1c/91/19/1c91190e8d085bcc5f128ba0ba4be317.jpg',
        capitulos: [
            {id:1,titulo:'¡Entra! ¡Naruto Uzumaki!',url:'https://www.mp4upload.com/embed-m8lo6lo5ht9j.html'},
            {id:2,titulo:'¡Mi Nombre es Konohamaru!',url:'https://www.mp4upload.com/embed-i7820sra3tso.html'},
            {id:3,titulo:'Sasuke y Sakura: ¡¿Amigos o Enemigos?!',url:'https://www.mp4upload.com/embed-dugdfifjhuk9.html'}
        ]

    },
    {
        id:7,
        titulo: 'Dragon ball Z',
        descripcion: 'Es la secuela de la serie original Dragon Ball y sigue las aventuras de Goku, un guerrero Saiyajin con una fuerza sobrehumana, y sus amigos mientras defienden la Tierra de diversos enemigos poderosos, como los Saiyajin, Freezer, Cell y Majin Buu. La serie es conocida por sus intensas batallas, técnicas de artes marciales, transformaciones icónicas como el Super Saiyajin, y temas de superación personal, amistad y protección del planeta. ',
        banner:'https://static.bandainamcoent.eu/s3fs-public/inline-images/dbfz_banner.jpg',
        capitulos: [
            {id:1,titulo:'Aparece un mini Gokū! Son Gohan!',url:'https://www.mp4upload.com/embed-7l183ynqedvz.html'},
            {id:2,titulo:'¡El guerrero más fuerte de la historia era el hermano de Gokū!',url:'https://www.mp4upload.com/embed-16nrn2ak3v0d.html'},
            {id:3,titulo:'¡Lo hemos conseguido! Este es el mejor dúo del mundo',url:'https://www.mp4upload.com/embed-f9zbaijja7ud.html'}
        ]

    },
    {
        id:8,
        titulo: 'Jujutsu Kaisen',
        descripcion: 'La historia sigue a Yuji Itadori, un estudiante de secundaria con una fuerza física inusual que, tras un encuentro con un objeto maldito, se ve envuelto en el mundo de los jujutsu, técnicas de hechicería utilizadas para combatir maldiciones malignas. Al ingerir un dedo del poderoso espíritu maldito Sukuna Ryoumen, Yuji se convierte en su anfitrión, lo que lo lleva a unirse a la Escuela Técnica de Magia Metropolitana de Tokio para aprender a controlar sus nuevas habilidades y luchar contra las maldiciones.',
        banner:'https://i.pinimg.com/originals/28/ef/40/28ef40e53d0036c906c3f7ce5445754f.jpg',
        capitulos: [
            {id:1,titulo:'Sukuna de la Doble cara',url:'https://www.mp4upload.com/embed-ludw7a0smm25.html'},
            {id:2,titulo:'Por mí',url:'https://www.mp4upload.com/embed-aqqtgptvnicm.html'},
            {id:3,titulo:'Chica de acero',url:'https://www.mp4upload.com/embed-doxkv0gmpaam.html'}
        ]

    },
    {
        id:9,
        titulo: 'Tengen Toppa Gurren-Lagann',
        descripcion: ' La historia se centra en Simon, un joven excavador que vive en un pueblo subterráneo, y Kamina, un carismático rebelde. Juntos, descubren un mecha gigante llamado Lagann, que usan para escapar a la superficie y luchar contra los "Hombres Bestia" que oprimen a la humanidad.',
        banner:'https://c4.wallpaperflare.com/wallpaper/205/646/372/anime-tengen-toppa-gurren-lagann-littner-yoko-kamina-wallpaper-thumb.jpg',
        capitulos: [
            {id:1,titulo:'¡¡Perfora los cielos con tu taladro!!',url:'https://terabox.com/sharing/embed?surl=i25pfladkvj5'},
            {id:2,titulo:'¡¡He dicho que yo lo piloto!!',url:'https://terabox.com/sharing/embed?surl=zk35m1y2g1nb'},
            {id:3,titulo:'¡¡Dos-caras, no me subestimes!!',url:'https://terabox.com/sharing/embed?surl=uj08g4f8lwgc'}
        ]

    },
    {
        id:10,
        titulo: 'Fire Force',
        descripcion: 'La historia tiene lugar en un mundo donde misteriosos casos de combustión humana espontánea transforman a las personas en criaturas demoníacas conocidas como Infernales. Para combatir esta amenaza, se crea una fuerza especial de bomberos llamada Fire Force, compuesta por personas con habilidades pirocinéticas.',
        banner:'https://lh4.googleusercontent.com/proxy/sY-rkPPOdVeR5Op5HMVWgLP8SL5uCOBQ_ERU4Yr4ekrkr4QBf5I9LOkgsgQEoFFN_f34Qqo51WGOxWg0jK4tqwtDKlm2gF15EBocofr7IViQmousKg',
        capitulos: [
            {id:1,titulo:'Shinra Kusakabe se enlista',url:'https://www.mp4upload.com/embed-wsh7taqte1i4.html'},
            {id:2,titulo:'Corazón de soldado de fuego',url:'https://www.mp4upload.com/embed-p10h500avshk.html'},
            {id:3,titulo:'Juegos de novatos',url:'https://www.mp4upload.com/embed-luszw46gq3d3.html'}
        ]

    },


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

cargarAnime();