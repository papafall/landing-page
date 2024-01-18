//cycling through header hero images
let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  slideIndex++;

  setTimeout(showSlides, 3000);
}
