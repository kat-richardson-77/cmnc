//load javascript
document.addEventListener("DOMContentLoaded",function(){});
//Form functionality

// button click for clear form

// gather form data and send to email

// button click for submit form
document.getElementById("myMessageForm").addEventListener("submit", submitForm);

function submitForm(){
const form = document.getElementById("myMessageForm");
const submitButton = document.getElementById("btnSubmit");
const resetButton = document.getElementById("btnReset");
const newMessage = document.getElementById("newMessage");

//Submit button functionality
submitButton.addEventListener("click", () => {
    //collect the data
    const formData = new FormData(form);
    const name = formData.get("your-name");
    const number = formData.get("phonenumber");
    const email = formData.get("email");
   // const position = formData.get("")
    const message = formData.get("message");

    //validate inputs

    if (!name || !email || !number || !message) {
        outputDiv.innerHTML = "<p style='color: darkpink;'> Please fill in all fields! </p>";
        return;
    }

    //display the form data
    outputDiv.innerHTML = '<h4>Form has been submitted successfully!</h3><p>Name ${name}</p>';
    
}); }

// carousel functionality
// Activate the carousel

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("comSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}