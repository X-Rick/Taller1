
const AnimeScopeImg = document.getElementById('AnimeScopeImg');
AnimeScopeImg.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirige a la página inicial
});



const EpVideo = document.getElementById('epi');
    EpVideo.addEventListener('click', () => {
    window.location.href = 'anime.html'; 
}); 



const capitulos = [
    {
        id: 1,
        titulo: 'cap1',
        url: 'https://terabox.com/sharing/embed?surl=2ZC_YcvIUnGp3yI6H0GMnw&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=342618491994056&slid=',


    },
    {
        id:2,
        titulo: 'cap2',
        url: 'https://terabox.com/sharing/embed?surl=G650AuCLkyrkNc-FjicC1g&resolution=1080&autoplay=true&mute=false&uk=4399467314851&fid=728899725397728&slid=" '
    }
]

let epid = 1


function reproduccirVideo() {
    const repro = capitulos.find(c => c.id === epid);
    if (repro) {
        const ContRepro = document.getElementById('reprod');
        ContRepro.innerHTML = `<iframe src="${repro.url}" frameborder="1" allowfullscreen class="video1"></iframe>`;

    } else {
        alert("no hay mas episodios");
    } 
}

document.getElementById('sig').addEventListener('click', () => {
    epid++;
    if (epid > capitulos.length) {
        window.location.href = 'anime.html'; //esto se hace para volver en caso de que se llegue al final y quiera avanzar 
    }
    reproduccirVideo();
})

reproduccirVideo();
