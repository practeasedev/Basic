const modeTogglerCircle = document.querySelector('.modeToggler__circle');
const modeToggler = document.querySelector('.modeToggler')
const articles = document.querySelectorAll('.article');
const advertisements = document.querySelectorAll('.advertisement');
const buttons = document.querySelectorAll('.button');
const contentImage = document.querySelector('.content__image');
const siteContainer = document.querySelector('.siteContainer');
const modeTogglerImage = document.querySelector('.modeToggler__image');
const advCloseBtn = document.querySelectorAll('.advertisement__closeBtn');

const selectedAdv = (Math.floor(Math.random() * 10)) % advertisements.length;

if(window.visualViewport.width <= 1200) {
    advertisements.forEach((adv, index) => {
        if(index !== selectedAdv) adv.style.display = "none";
    });
}

let lightMode = true;

modeTogglerCircle.addEventListener('click', () => {
    lightMode = !lightMode;
    modeTogglerImage.setAttribute('src', lightMode ? './images/sun.svg' : './images/moon.svg');
    modeTogglerImage.style.transform = lightMode ? 'rotate(360deg)' : 'rotate(-360deg)';
    contentImage.setAttribute('src', lightMode ? './images/adv-img-light.svg' : './images/adv-img-dark.svg')
    modeToggler.classList.toggle('modeToggler--dark');
    modeTogglerCircle.classList.toggle('modeToggler__circle--dark');
    siteContainer.classList.toggle('siteContainer--dark');

    articles.forEach((article) => {
        article.classList.toggle("article--dark");
    });

    advertisements.forEach((adv) => {
        adv.classList.toggle("advertisement--dark");
    });

    buttons.forEach((button) => {
        button.classList.toggle("button--dark");
    });
});

advCloseBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click' , (e) => {
        e.target.parentElement.style.display="none";
    })
});

window.addEventListener('resize', (e) => {
    if(window.visualViewport.width <= 1200){
        advertisements.forEach((adv, index) => {
            if(index !== selectedAdv) adv.style.display = "none";
        });
    } else{
        advertisements.forEach((adv) => {
            adv.style.display = "block";
        });
    }
});