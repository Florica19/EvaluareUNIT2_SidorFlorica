let slideIndex = 0; 

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  
  slideIndex++;

  
  if (slideIndex > slides.length) { 
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active"; 

  setTimeout(showSlides, 3000);
}

function startSlideshow() {
  document.querySelector('.monitorizare').style.display = 'none'; 
  document.querySelector('.slideshow-container').style.display = 'block';
  showSlides(); 
}
document.querySelector('.monitorizare').addEventListener('dblclick', startSlideshow);