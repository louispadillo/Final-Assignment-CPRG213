// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

submitButton.addEventListener("click", function() {
    // creating a new <p> element
    const thankYouMsg = document.createElement("p");

    // Set the text content and style of the <p> element
    thankYouMsg.textContent = "Thank you for your message!";
    thankYouMsg.style.fontSize = "24px";

    // Clear existing content
    contactPage.innerHTML = '';
    contactPage.appendChild(thankYouMsg);
});