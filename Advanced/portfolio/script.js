const observer = new IntersectionObserver(callback);

const header = document.querySelector('.header');
const heroSubTagline = document.querySelector('.hero__subTagline');
const heroTagline = document.querySelector('.hero__tagline');
const heroCtas = document.querySelector('.hero__ctas');
const heroImage = document.querySelector('.hero__mainImg');
const scrollIndicator = document.querySelector('.scrollIndicator');
const titleAbout = document.querySelector('.title--about');
const aboutImage = document.querySelector('.about__img');
const aboutInfo = document.querySelector('.about__info');
const titleSkills = document.querySelector('.title--skills');
const skills = document.querySelector('.skills__main');
const titleProject = document.querySelector('.title--projects');
const projectMain = document.querySelector('.project__main');
const projectImage = document.querySelector('.project__img');
const links = document.querySelectorAll('.navigation__link');
const mobileNavCloseBtn = document.querySelector('.mobileNavigation__close');
const mobileNavLinks = document.querySelectorAll('.mobileNavigation__link');
const mobileNav = document.querySelector('.mobileNavigation');
const hamburgerBtn = document.querySelector('.header__hamburger');
const viewProject = document.querySelector('.button--project')

function scrollToSection(linkName) {
   switch(linkName){
        case 'Home':
            window.scrollBy({
                top: header.getBoundingClientRect().top,
                behaviour: 'smooth'
            });
            break;
        case 'About':
            window.scrollBy({
                top: titleAbout.getBoundingClientRect().top - 20,
                behaviour: 'smooth'
            });
            break;
        case 'Skills':
            window.scrollBy({
                top: titleSkills.getBoundingClientRect().top - 20,
                behaviour: 'smooth'
            });
            break;
        case 'Projects':
            window.scrollBy({
                top: titleProject.getBoundingClientRect().top - 20,
                behaviour: 'smooth'
            });
            break;
   }
}


viewProject.addEventListener('click',(e) => {
    scrollToSection('Projects')
})


links.forEach((link) => {
    link.addEventListener('click', (e) => {
        scrollToSection(e.target.textContent);
    })
})

const elements = [header,heroSubTagline, heroTagline, heroCtas, heroImage, scrollIndicator, titleAbout, aboutImage, 
aboutInfo, titleSkills, skills, titleProject, projectMain, projectImage];

elements.forEach((element) => {
    observer.observe(element)
});

function animateElement (element) {
    switch(element.target.className){
        case 'header'+' noVisibility':
            header.classList.remove('noVisibility');
            header.classList.add('slideInFromTop');
            observer.unobserve(header);
            break;
        case 'hero__tagline'+' noVisibility':
            heroTagline.classList.remove('noVisibility')
            heroTagline.classList.add('slideInFromLeft');
            observer.unobserve(heroTagline);
            break;
        case 'hero__subTagline'+' noVisibility':
            heroSubTagline.classList.remove('noVisibility')
            heroSubTagline.classList.add('slideInFromLeft');
            observer.unobserve(heroSubTagline);
            break;
        case 'hero__ctas'+' noVisibility':
            heroCtas.classList.remove('noVisibility')
            heroCtas.classList.add('zoomIn');
            observer.unobserve(heroCtas);
            break;
        case 'hero__mainImg'+' noVisibility':
            heroImage.classList.remove('noVisibility')
            heroImage.classList.add('slideInFromRight');
            observer.unobserve(heroImage);
            break;
        case 'scrollIndicator'+' noVisibility':
            scrollIndicator.classList.remove('noVisibility')
            scrollIndicator.classList.add('fadeIn');
            observer.unobserve(scrollIndicator);
            break;
        case 'title title--about'+' noVisibility':
            titleAbout.classList.remove('noVisibility')
            titleAbout.classList.add('slideInFromRight');
            observer.unobserve(titleAbout);
            break;
        case 'about__info'+' noVisibility':
            aboutInfo.classList.remove('noVisibility');
            aboutInfo.classList.add('slideInFromRight');
            observer.unobserve(aboutInfo);
            break;
        case 'about__img'+' noVisibility':
            aboutImage.classList.remove('noVisibility')
            aboutImage.classList.add('slideInFromLeft');
            observer.unobserve(aboutImage);
            break;
        case 'title title--skills'+' noVisibility':
            titleSkills.classList.remove('noVisibility')
            titleSkills.classList.add('fadeIn');
            observer.unobserve(titleSkills);
            break;
        case 'skills__main'+' noVisibility':
            skills.classList.remove('noVisibility')
            skills.classList.add('zoomIn');
            observer.unobserve(skills);
            break;
        case 'title title--projects'+' noVisibility':
            titleProject.classList.remove('noVisibility')
            titleProject.classList.add('fadeIn');
            observer.unobserve(titleProject);
            break;
        case 'project__main'+' noVisibility':
            projectMain.classList.remove('noVisibility')
            projectMain.classList.add('slideInFromLeft');
            observer.unobserve(projectMain);
            break;
        case 'project__img'+' noVisibility':
            projectImage.classList.remove('noVisibility')
            projectImage.classList.add('slideInFromRight');
            observer.unobserve(projectImage);
            break;
    }
}

function callback (entries) {

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            animateElement(entry);
        }
    })
}

function closeMobileNavigation() {
    mobileNav.classList.remove('slideInFromRight');
    mobileNav.style.display = 'none';
    document.body.style.overflowY = 'auto';
} 

function openMobileNavigation() {
    mobileNav.classList.add('slideInFromRight');
    document.body.style.overflowY = 'hidden';
    mobileNav.style.display = 'flex';
}


mobileNavCloseBtn.addEventListener('click', closeMobileNavigation);

mobileNavLinks.forEach((link) => {

    link.addEventListener('click' ,(e) => {
        closeMobileNavigation();
        scrollToSection(e);
    });
});

hamburgerBtn.addEventListener('click', openMobileNavigation)



