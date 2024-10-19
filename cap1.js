AnimeScopeImg.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirige a la página inicial
});


const Anime = [
    {
        id:1,
        titulo: 'dandadan',
        banner: 'https://a.storyblok.com/f/178900/1920x1080/fc9956de7a/dandadan-key-art-wide.png/m/1200x0/filters:quality(95)format(webp)',
        descripcion: 'La historia sigue a un par de estudiantes de secundaria, Momo Ayase y Ken Takakura, quienes descubren el mundo de los extraterrestres y los espíritus después de un encuentro sobrenatural. Momo cree en fantasmas, mientras que Ken cree en extraterrestres. La trama se desenvuelve en torno a su lucha contra estas entidades y la creciente amistad entre ambos',
        capitulos: [
            {
                id: 1,
                titulo: 'Yo diría que así empieza el amor. ¿no crees?',
                url: 'https://terabox.com/sharing/embed?surl=2ZC_YcvIUnGp3yI6H0GMnw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=342618491994056&slid=',
        
        
            },
            {
                id:2,
                titulo: 'Eso es un extraterreste, ¿no?',
                url: 'https://terabox.com/sharing/embed?surl=G650AuCLkyrkNc-FjicC1g&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=728899725397728&slid='
            },
            {
                id:3,
                titulo: 'El choque de la abuela contra abuela',
                url: 'https://terabox.com/sharing/embed?surl=6O25PBHENKfEZPpZH3A4Lw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=199855654280950&slid='
            }]
    },

    {
        id:2,
        titulo:'Blue lock',
        banner: 'https://i.pinimg.com/originals/f4/d1/ef/f4d1efea7f94ddfe45c53f55a21ad7f5.jpg',
        capitulos: [
            {
                id:1,
                titulo:'Sueño', 
                url: 'https://terabox.com/sharing/embed?surl=2VHC7KNcq1JOlF8Avh8-SQ&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=500575841028806'
            },
            {
                id:2,
                titulo:'Monstruo',
                url: 'https://terabox.com/sharing/embed?surl=V3H7PrRC_PPQO9DkXmA1LQ&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=844910741984821'
            },
            {
                id:3,
                titulo:'El "cero" del futbol',
                url:'https://terabox.com/sharing/embed?surl=V3H7PrRC_PPQO9DkXmA1LQ&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=844910741984821'
            }]
    },
    {
        id:3,
        titulo:'Kimetsu no yaiba',
        banner: 'https://i.pinimg.com/736x/32/70/a7/3270a725754ea13feaa2e4dc83878df4.jpg',
        capitulos: [{
            id:1,
            titulo: 'Crueldad',
            url:'https://www.burstcloud.co/embed/facee5d33a40594268a7dea0ad59ddf8bc94ee36a83942acf5ec2201bcba879a/Kimetsu 1.mp4',
        },
        {
            id:2,
            titulo: 'El instructor, Sakonji Urokodaki',
            url:'https://www.burstcloud.co/embed/3904c8ad5e38c6a3932ac75e0f1c4402d2bed7be33b89743e19667188a32c170/Kimetsu 2.mp4',
        },
        {
            id:3,
            titulo: 'Sabito y Makomo',
            url:'https://www.burstcloud.co/embed/c217778c5dd1f67daabca970a34bc90fb8ca029e560f5da2d69e7defab4f4839/Kimetsu 3.mp4',
        },
    ]
    }
]

const urlAnime = new URLSearchParams(window.location.search); // esta funcion sirve para jugar literalmente con una url, es decir, permite extraerla y asi facilitar la manipulacion, y window.location.search se encarga de buscar la parte de la url que necesito, en este caso, el ?animeId=1 asi despues en la parte del get obtener el numero que tiene



function cargaAnime() {
    const urlid = new URLSearchParams(window.location.search);
    const animeId = parseInt(urlid.get('animeId'), 10);
    const AnimeSel = Anime.find(anime => anime.id === animeId);

    if(AnimeSel) {
        document.querySelector('.banner').src = AnimeSel.banner;
        document.querySelector('.titulo').textContent = AnimeSel.titulo;
        document.querySelector('.parrafo').textContent = AnimeSel.descripcion;

        
        const ListaCap = document.querySelector('.listaC ul');
        
        ListaCap.innerHTML=''; //limpia la lista para que no se repitan los cap
        AnimeSel.capitulos.forEach(capitulos => { //
            const li = document.createElement('li');
            li.classList.add('ListaA');
            li.innerHTML = `<a href="cap1.html?capitulo=${capitulos.id}">${capitulos.titulo}</a>`;
            ListaCap.appendChild(li); // 
        });
    };
}

const NumEpi = new URLSearchParams(window.location.search); //mira en que episiodio empieza a reproducirse




function reproduccirVideo() {
    // se obitne el id del anime desde la url
    const vid1 = new URLSearchParams(window.location.search);
    const animeId = parseInt(vid1.get('animeId'), 10);
    const epid = parseInt(vid1.get('capitulo'), 10);


    const AnimeSel = Anime.find(anime => anime.id === animeId); //busca el anime por su id
    if (!AnimeSel) {
        alert("Anime no encontrado.");
        return;
    }

    const repro = AnimeSel.capitulos.find(c => c.id === epid);

    if (repro) {
        const ContRepro = document.getElementById('reprod');
        ContRepro.innerHTML = `<iframe src="${repro.url}" frameborder="1" allowfullscreen class="video1"></iframe>`;
    } else {
        alert("No hay más episodios");
    }
}


document.getElementById('sig').addEventListener('click', () => {
    const urlid = new URLSearchParams(window.location.search);
    const animeId = parseInt(urlid.get('animeId'), 10);
    let epid = parseInt(urlid.get('capitulo',10));

    const animeSel = Anime.find(a => a.id === animeId);
    if (animeSel && epid < animeSel.capitulos.length) {
        epid++;
        window.location.href = `cap1.html?animeId=${animeId}&capitulo=${epid}`; //esto se hace para volver en caso de que se llegue al final y quiera avanzar 
    }
    reproduccirVideo();
})

const EpVideo = document.getElementById('epi');
    EpVideo.addEventListener('click', () => {
    window.location.href = 'anime.html'; 
}); 

cargaAnime();
reproduccirVideo();
