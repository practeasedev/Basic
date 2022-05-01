const gradientForm = document.querySelector(".gradient_generator__form");
const previewPane = document.querySelector('.gradient_generator__preview');

gradientForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    previewPane.style.backgroundImage = `linear-gradient(135deg,${color1},${color2})`
})