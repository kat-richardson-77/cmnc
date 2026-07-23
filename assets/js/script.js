// Form functionality
// form validation

//document.getElementById("btnSubmit").addEventListener("click", validateForm);
    

    // Add form validation logic here
    //validate name, email, has position been checked, message is not empty
  

// button click for clear form
    document.getElementById("btnReset").addEventListener("click", function() {
        document.getElementById("myMessageForm").reset();
    });

// gather form data and send to email

// button click for submit form



// carousel functionality
// Activate the carousel
let currentSlide = 0;

function startSlider() {
    let imageCount = document.querySelectorAll("img");
    let images = document.querySelector("ul");

    if (imageCount.length === 0) {
        imageCount = document.querySelectorAll("img");
        images.style.transform = "translateX(0px)";
        return;
    }
    
    images.style.transform = 'translateX(-${currentSlide * 300}px)';

    //remove active class from all dots
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    //add active class to current dot
    dots[currentSlide].classList.add("active");

    if (currentSlide === imageCount.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
}

setInterval(() => {
    startSlider();
}, 3000);
