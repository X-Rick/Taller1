
const AnimeScopeImg = document.getElementById('AnimeScopeImg');
AnimeScopeImg.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth',
    });
})


const img = [
    'https://a.storyblok.com/f/178900/1920x1080/fc9956de7a/dandadan-key-art-wide.png',
    'https://akiraseihin.pe/wp-content/uploads/2023/05/BANNER-BLUELOCK-2.webp',
    'https://es.dragon-ball-official.com/dragonball/es/news/2023/10/13/n231013000-1en.jpg'
];


const carouselSlide = document.querySelector('.carousel-slide');
let currentIndex = 0;

function UpdBackground(index) {
    carouselSlide.style.backgroundImage = `url(${img[index]})`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % img.length;
    UpdBackground(currentIndex); 
}


function antSlide() {
    currentIndex = (currentIndex - 1 + img.length) % img.length;
    UpdBackground(currentIndex); 
}

document.querySelector('.next').addEventListener('click',nextSlide);
document.querySelector('.prev').addEventListener('click',antSlide);

UpdBackground(currentIndex);

const txt = {
    dandadan : 'si no nose ',
    bluelock : 'nose tampoco',
    DragonBall : 'tampoco'
}

const carouselTxt = document.getElementById('carrusel-txt');

let backtxt = 0
function InsertTxt(backtxt) {
    console.log('hola');
    for (let i = 0;i<txt;i++) {
        carouselTxt.innerHTML = txt[i]
        i = i + 1
    } 
}


