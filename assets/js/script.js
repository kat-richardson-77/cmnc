// Form functionality
// form validation


function validateForm() {
    // Add form validation logic here
    //validate name, email, has position been checked, message is not empty
    let name = document.forms["myMessageForm"]["your-name"].value;
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    let email = document.forms["myMessageForm"]["email"].value;
    let message = document.forms["myMessageForm"]["message"].value;
    let positions = document.forms["myMessageForm"]["positions"];
    let positionChecked = false;

    // Check if at least one position is selected
    for (let i = 0; i < positions.length; i++) {
        if (positions[i].checked) {
            positionChecked = true;
            break;
        }
    }

    // Validate each field
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    if (!positionChecked) {
        alert("Please select at least one position.");
        return false;
    }
    if (message === "") {
        alert("Please enter a message.");
        return false;
    }

    return true;
}

// button click for clear form
//function clearForm() {
    document.getElementById("btnreset").addEventListener("click", function() {
        document.getElementById("myMessageForm").reset();
    });
//}
// gather form data and send to email

// button click for submit form



// carousel functionality
// Activate the carousel
