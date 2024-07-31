let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(' active', '');
    });
    
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
