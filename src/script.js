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
//details
const changeEvenDetails = () => {
  let i = 2;
  let row = null;
  let container = null;
  while (true) {
    container = document.getElementById("details-bg-" + i.toString());
    row = document.getElementById("details-row-" + i.toString());
    if (container === null || row === null) break;
    container.classList.toggle("even");
    row.classList.add("reversed");
    i += 2;
  }
}
changeEvenDetails();
//swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});