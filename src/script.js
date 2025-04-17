//menu
const icon = document.getElementById("menu-icon");
const menu = document.getElementById("main-menu");
const originMenuClass = menu.className;
let isCollapse = false;
const toggleMenu = () => {
  if (isCollapse) {menu.className = originMenuClass} else {menu.className = "collapse-menu"}
 isCollapse = !isCollapse
};
icon.addEventListener("click", toggleMenu)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.className = originMenuClass;
    isCollapse = false;
  }});
//contact
const contactCross = document.getElementById("contact-cross");
const contact = document.getElementById("contact");
const contactForm = document.getElementById("contact-form");
if (contact && contactForm && contactCross) {
    contact.addEventListener("click", () => {
      contactForm.classList.toggle("on");
    });
    contactCross.addEventListener("click", () => {
      contactForm.classList.remove("on");
    });
  }

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
//price
const priceCheck = (x) => {
  const card = document.getElementById("price" + x.toString());
  const title = document.getElementById("priceT" + x.toString());
  const info = document.getElementById("priceI" + x.toString());
  const infoMain = document.getElementById("priceImain" + x.toString());
  const infoSub = document.getElementById("priceIsub" + x.toString());
  const button = document.getElementById("priceB" + x.toString()); 
  card.addEventListener("mouseenter", function () {
    title.classList.add("h");
    info.classList.add("h");
    infoMain.classList.add("h");
    infoSub.classList.add("h");
    button.classList.add("h");
  });
  card.addEventListener("mouseleave", function () {
    title.classList.remove("h");
    info.classList.remove("h");
    infoMain.classList.remove("h");
    infoSub.classList.remove("h");
    button.classList.remove("h");
  });
}
for (let i = 1; i <= 4; i++) {
  priceCheck(i);
}
//map

const coord = { lat: 50.4501, lng: 30.5234 }; // видалити коли ключ буде дійсним
/* const mapKey = "AIzaSyAKsZpp01NHRWm-idLPAlsbpjkdABq5k5E";
const address = encodeURIComponent(document.getElementById("address").textContent);
async function getCoordinates() {
const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${mapKey}`);
return response.data.results[0].geometry.location;
}
const coord = getCoordinates(); */
function initMap() {
  
  const center = { lat: 25.763955930182036, lng: -80.19016490234428 }

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
  });

  // (необов'язково) Додаємо маркер
  new google.maps.Marker({
    position: center,
    map: map,
  });
}

// pool
const poolForm = document.getElementById("pool-form");
const poolButton = document.getElementById("pool-send");
const poolFormCheck = () => {
  let valid = poolForm.checkValidity();
  if (valid) {poolButton.textContent = "MESSAGE SENT";
  }
}