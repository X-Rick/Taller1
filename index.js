
const AnimeScopeImg = document.getElementById('AnimeScopeImg');
AnimeScopeImg.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth',
    });
})


const img = [
    'https://a.storyblok.com/f/178900/1920x1080/fc9956de7a/dandadan-key-art-wide.png',
    'https://a.storyblok.com/f/178900/1920x1008/0334180e36/dragon-ball-daima-key-visual-wide.png/m/1200x0/filters:quality(95)format(webp)',
    'https://akiraseihin.pe/wp-content/uploads/2023/05/BANNER-BLUELOCK-2.webp'
];


const carouselSlide = document.querySelector('.carousel-slide');
let currentIndex = 0;

function UpdBackground(index) {
    carouselSlide.style.backgroundImage = `url(${img[index]})`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1);
    UpdBackground(currentIndex); 
}


function antSlide() {
    currentIndex = (currentIndex - 1);
    UpdBackground(currentIndex); 
}

document.querySelector('.next').addEventListener('click',nextSlide);
document.querySelector('.prev').addEventListener('click',antSlide);

UpdBackground(currentIndex);

