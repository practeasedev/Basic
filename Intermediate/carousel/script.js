const carouselTrack = document.querySelector('.carousel__container');
const carouselLeft = document.querySelector('.carousel__chevron_left');
const carouselRight = document.querySelector('.carousel__chevron_right');
const carouselIndicators = document.querySelectorAll('.carousel__indicator');

let count=0;

carouselLeft.addEventListener('click',() => {
    if(count === 0){
        return;
    }
    carouselIndicators[count].style.backgroundColor = "transparent"
    count--;
    carouselIndicators[count].style.backgroundColor= "white"
    carouselTrack.style.transform = "translateX(-"+count*100+"%)"
})

carouselRight.addEventListener('click',() => {
    if(count === 2){
        return;
    }
    carouselIndicators[count].style.backgroundColor = "transparent"
    count++;
    carouselIndicators[count].style.backgroundColor= "white"
    carouselTrack.style.transform = "translateX(-"+count*100+"%)"
})

carouselIndicators.forEach((carouselIndicator,i) => {
    carouselIndicator.addEventListener('click',()=>{
        carouselIndicators[count].style.backgroundColor = "transparent"
        count=i;
        carouselIndicators[count].style.backgroundColor= "white"
        carouselTrack.style.transform = "translateX(-"+count*100+"%)"
    })
})