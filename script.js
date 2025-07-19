function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  carousel.scrollBy({
    left: direction * 300,
    behavior: 'smooth'
  });
}

// Optional: Pause auto-slide on mouse hover
const carousel = document.getElementById("carousel");
carousel.addEventListener("mouseenter", () => {
  carousel.style.animationPlayState = "paused";
});
carousel.addEventListener("mouseleave", () => {
  carousel.style.animationPlayState = "running";
});
