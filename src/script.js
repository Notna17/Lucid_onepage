//contact
const contact = document.getElementById("contact");
const contactForm = document.getElementById("contact-form");
contact.addEventListener("click", function () {
  contactForm.classList.toggle("on");

});
const contactFormCheck = () => {
    let valid = contactForm.checkValidity();
    if (valid) contactForm.classList.toggle("on");
}