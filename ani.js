let currentSlide = 1;
const totalSlides = 2; /* Quantidade de slides (atualize se adicionar mais)*/

function autoSlide() {
  
    currentSlide = (currentSlide % totalSlides) + 1;  /* Alterna para o próximo slide*/

 
    document.getElementById(`slide${currentSlide}`).checked = true;

}


setInterval(autoSlide, 3000);




