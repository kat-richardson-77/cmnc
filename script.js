// Form functionality
// form validation

// button click for clear form

// gather form data and send to email

// button click for submit form


// carousel functionality
// Activate the carousel
var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, // Set the interval for automatic sliding (in milliseconds)
  wrap: true // Enable wrapping to loop back to the first slide
});
// Enable Carousel indicators
var indicators = document.querySelectorAll('#myCarousel .carousel-indicators button');
// Enable Carousel controls
var prevButton = document.querySelector('#myCarousel .carousel-control-prev');
var nextButton = document.querySelector('#myCarousel .carousel-control-next');