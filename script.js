// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Buy Now Button
function buyNow() {
    alert("Product added to cart!");
}

// Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (name === "" || email === "") {
        message.innerText = "Please fill all fields";
        message.style.color = "red";
        return false;
    }

    message.innerText = "Thank you! Form submitted successfully.";
    message.style.color = "green";
    return false;
}