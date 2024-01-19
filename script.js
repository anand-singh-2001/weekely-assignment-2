import item from "./data.json" assert { type: "json" };
console.log(item.item);
const data = item.item;

const container = document.querySelector(".container");
const typography = document.querySelector(".typography");
const socialHandles = document.querySelector(".social_handles");

const splideList = document.querySelector(".splide__list");

splideList.innerHTML = data
  .map(
    (item) =>
      `<div class="splide__slide">
        <img src="${item.img_url}" class="slider_image"/>
    </div>`
  )
  .join("");

typography.innerHTML = `
    <div class="typography_heading">
    <h1 class="heading_large">${data[0].heading.large}</h1>
    <h2 class="heading_small">${data[0].heading.small} &nbsp;<span class="heading_span">${data[0].heading.span}</span></h2>
    </div>
    <p class="item_description">${data[0].description}</p>
    <span class="item_price">${data[0].price}</span>

    `;

socialHandles.innerHTML = `
    <img src="${data[0].frame}"></img>`;

container.style.background = `${data[0].background}`;

function generateTypography(id) {
  let requiredData = data.find((item) => item.id === id);
  console.log(requiredData);
  //   if (!id) {
  //     requiredData = data[0];
  //   }
  typography.innerHTML = `
    <div class="typography_heading">
    <h1 class="heading_large">${requiredData.heading.large}</h1>
    <h2 class="heading_small">${requiredData.heading.small} &nbsp;<span class="heading_span">${requiredData.heading.span}</span></h2>
    </div>
    <p class="item_description">${requiredData.description}</p>
    <span class="item_price">${requiredData.price}</span>

    `;

  socialHandles.innerHTML = `
    <img src="${requiredData.frame}"></img>`;

  container.style.background = `${requiredData.background}`;
}

const splide = new Splide(".splide", {
  type: "loop",
  perPage: 1,
  width: "100%",
  pagination: false,
  gap: "1.5rem",
  //   width: "100%",
  focus: 0,
  arrows: true,
  prev: true,
  arrowColor: "#ffff",
  easing: "cubic-bezier(0.5, 1, 0.5, 1)",
  breakpoints: {
    700: {
      width: "100%",
    },
    480: {
      width: "100%",
    },
  },
});
splide.mount();

splide.on("moved", function (newIndex, prevIndex, destIndex) {
  console.log(newIndex);
  generateTypography(newIndex);
});
