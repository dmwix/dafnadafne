document.addEventListener("DOMContentLoaded", photosReady);

function photosReady() {
  window.onpopstate = onPopState;
  if (slugSection == "foto") {
    onPopState({ state: { photo: slugFiltro } });
  } else if (slugFiltro) {
    onPopState({ state: { filter: slugFiltro } });
  }

  let filterElements = document.querySelectorAll(`[href='#todas']`);
  filterElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      changeFilter("todas");
    });
  });
}

// FOTOS
const filtersList = document.querySelector(".filters-list");
const filtersNav = document.querySelector(".filters-nav");
const topOfFiltersList = filtersNav.offsetTop;
const grid = document.querySelector(".grilla-fotos");

function fixNav() {
  if (!document.body.contains(grid)) return;
  if (window.scrollY >= topOfFiltersList) {
    // document.body.style.paddingTop = filtersNav.offsetHeight + "px";
    // esto le suma lo que le sacás de pxs cuando volves fijo el nav, pero como le puse static no ocupa espacio ahora
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixNav);

// llenar grilla con fotos
photos.forEach((photo) => {
  let photoDiv = document.createElement("div");
  photoDiv.classList.add("foto");
  // poner small la foto
  photoDiv.innerHTML = `<img src="${photo.src.small}" alt="${
    photo.title
  }" class="${photo.filters.join(" ")}" data-slug=${photo.slug}>`;
  grid.append(photoDiv);
});

noCursor([...grid.children]);

const todas = document.querySelectorAll("img");
const filters = document.querySelectorAll("[data-filter]");
noCursor(filters);

function filterGallery(criterio) {
  hidePhotos(todas);
  showPhotos(criterio);
}

function hidePhotos(arr) {
  arr.forEach((photo) => {
    let imgWrapper = photo.closest(".foto");
    imgWrapper.style.display = "none";
  });
}

function showPhotos(arr) {
  arr.forEach((photo) => {
    let imgWrapper = photo.closest(".foto");
    imgWrapper.style.display = "flex";
  });
}

function activeFilter(filter) {
  document.querySelector(".current").classList.remove("current");
  filter.classList.add("current");
}

function updateTitle(filterName) {
  let titulo = `fotos: ${filterName}`;
  if (filterName == "todas") {
    document.title = `fotos | dafna szleifer`;
  } else {
    document.title = titulo + " | dafna szleifer";
  }
}

let acco = document.querySelector(".accordion");

filtersList.addEventListener("click", (e) => {
  let filter = e.target.closest(".filter");
  if (!filter) return;
  e.preventDefault();
  let filterName = filter.dataset.filter;
  changeFilter(filterName);
});

function changeButtonText(filter) {
  let name = filter.innerHTML;
  filtersButton.innerText = name;
}

function changeFilter(filterName, preventnavegation) {
  let filter = document.querySelector(`[data-filter="${filterName}"]`);
  if (filter == null) {
    history.replaceState({}, "", "/fotos");
    console.log(`el filtro ${filterName.toUpperCase()} no existe`);
    return;
  }

  closeCarousel(false);

  // poner clase activa al filtro seleccionado en la lista
  activeFilter(filter);

  // comportamiento para "todas"
  filterName = filterName == "todas" ? "" : filterName;
  let selected = filterName
    ? document.querySelectorAll(`.${filterName}`)
    : todas;

  changeButtonText(filter);

  // aplicar filterGallery al seleccionado
  filterGallery(selected);
  closeAccordion();

  // actualizar url y actualizar el título del sitio
  let url = `/fotos/${filterName}`;
  updateTitle(filter.innerText);
  if (preventnavegation == true) {
    return;
  }
  changeUrl(url, { filter: filterName });

  scrollToTop();
}

function onPopState(e) {
  if (e.state == null) {
    changeFilter("todas", true);
  } else if (e.state.filter) {
    changeFilter(e.state.filter, true);
  } else if (e.state.photo) {
    openCarousel(e.state.photo, true);
  }
  // changeFilter(filterName, true);
}

const filtersButton = document.getElementById("filters-button");

// CAROUSEL
const carouselWindow = document.getElementById("carousel-window");
const carousel = document.getElementById("carousel");
const carouselNavigation = document.querySelectorAll(".carousel-navigation");
const closeCarouselButton = document.getElementById("carousel-close");
noCursor(carouselWindow.querySelectorAll("button"));
let slideWrapper = document.querySelector(".slide-wrapper");
let currentSlide;

function openCarousel(slug, preventnavegation) {
  let currentPhoto = photos.find((p) => p.slug == slug) || false;
  if (!currentPhoto) return;
  carouselWindow.classList.remove("fade-out");
  carouselWindow.classList.add("fade-in");
  carouselWindow.style.display = "block";
  slideWrapper.innerHTML = `<img src="${currentPhoto.src.large}" srcet="${currentPhoto.src.medium} 700w, ${currentPhoto.src.large} 1500w" sizes="100vw" alt="${currentPhoto.title}">`;
  document.body.style.overflowY = "hidden";
  cursor.style.display = "none";

  document.addEventListener("mousemove", cursorFlechita);
  let photoUrl = `/foto/${currentPhoto.slug}`;

  if (preventnavegation == true) return;
  changeUrl(photoUrl, { photo: currentPhoto.slug });
}

function closeCarousel(e) {
  if (e) {
    if (e.target.closest(".carousel-navigation")) return;
  }
  carouselWindow.classList.add("fade-out");
  setTimeout(() => {
    carouselWindow.style.display = "none";
  }, 200);
  document.body.style.overflowY = "auto";

  document.removeEventListener("mousemove", cursorFlechita);
  flecha.style.display = "none";
  const mediaQuery = window.matchMedia("(min-width: 480px)");
  if (mediaQuery.matches) {
    cursor.style.display = "block";
  }

  const currentFilter = document.querySelector(".filter.current");
  const filterSlug = currentFilter.dataset.filter;

  if (e) {
    let url = `/fotos/${filterSlug}`;
    changeUrl(url, { filter: filterSlug });
  }
}

// function navigateCarousel(e) {
//   let navigationArrow = e.target.closest(".carousel-navigation");
//   if (!navigationArrow) return;
//   const direction = navigationArrow.dataset.direction === "next" ? 1 : -1;
//   const currentFilter = document.querySelector(".filter.current");
//   const currentGallery = [
//     ...document.querySelectorAll(`.${currentFilter.innerText}`),
//   ];
//   currentSlide = slideWrapper.firstChild;
//   let index = currentGallery.findIndex(
//     (image) => image.src === currentSlide.src
//   );
//   let newIndex = index + direction;
//   if (newIndex < 0) {
//     newIndex = currentGallery.length - 1;
//   }
//   if (newIndex >= currentGallery.length) newIndex = 0;
//   slideWrapper.textContent = "";
//   currentSlide = currentGallery[newIndex];
//   newSlide = currentSlide.cloneNode(true);
//   newSlide.className = "";
//   slideWrapper.append(newSlide);
// }

const flecha = document.querySelector(".flecha");

function cursorFlechita(e) {
  flecha.style.display = "block";
  let flechaLeft = `${e.pageX - flecha.offsetWidth / 2}`;
  let flechaTop = `${e.pageY - flecha.offsetHeight / 2}`;
  flecha.style.left = flechaLeft + "px";
  flecha.style.top = flechaTop + "px";
  if (flechaLeft < ancho / 2) {
    flecha.innerHTML = `<img src="/images/previous.svg">`;
    flecha.dataset.direction = "previous";
  } else {
    flecha.innerHTML = `<img src="/images/next.svg">`;
    flecha.dataset.direction = "next";
  }
}

function cursorFlechitaNavigation() {
  const direction = flecha.dataset.direction === "next" ? 1 : -1;
  const currentFilter = document.querySelector(".filter.current");
  const currentGallery = photos.filter((p) =>
    p.filters.includes(currentFilter.dataset.filter)
  );
  currentSlide = slideWrapper.firstChild;
  let index = currentGallery.findIndex(
    (image) => image.title == currentSlide.alt
  );
  let newIndex = index + direction;
  if (newIndex < 0) {
    newIndex = currentGallery.length - 1;
  }
  if (newIndex >= currentGallery.length) newIndex = 0;
  currentSlide = currentGallery[newIndex];
  slideWrapper.innerHTML = `<img src="${currentSlide.src.large}" alt="${currentSlide.title}">`;

  let foto = photos.find((p) => p.title == currentSlide.title);
  let fotoSlug = `/foto/${foto.slug}`;
  changeUrl(fotoSlug, { photo: foto.slug });
}

document.addEventListener("keydown", (e) => {
  let carouselWindowDisplay = window.getComputedStyle(
    carouselWindow,
    null
  ).display;
  if (carouselWindowDisplay == "none") return;
  switch (e.key) {
    case "Escape":
      closeCarousel(e);
      break;
    case "ArrowLeft":
      flecha.dataset.direction = "previous";
      carousel.click();
      break;
    case "ArrowRight":
      flecha.dataset.direction = "next";
      carousel.click();
      break;
    default:
      return;
  }
});

function noFlechita(el) {
  function hideFlechita() {
    flecha.style.opacity = "0";
  }

  function showFlechita() {
    flecha.style.opacity = "1";
  }

  el.addEventListener("mouseover", hideFlechita);
  el.addEventListener("mouseout", showFlechita);
}

grid.addEventListener("click", (e) => {
  let img = e.target.closest("img");
  if (!img) return;
  let slug = img.dataset.slug;

  openCarousel(slug);
});
grid.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

carousel.addEventListener("click", cursorFlechitaNavigation);
closeCarouselButton.addEventListener("click", closeCarousel);
noFlechita(closeCarouselButton);

let closeCarouselButtonCounter = 0;
closeCarouselButton.addEventListener("mouseover", () => {
  closeCarouselButtonCounter += 1;
  let rotationDeg = 90 * closeCarouselButtonCounter;
  closeCarouselButton.style.transform = `rotate(${rotationDeg}deg)`;
});

// SHRUG
slideWrapper.addEventListener("contextmenu", shrug);
let shrugDiv;
let timerShrug;

function shrug(event) {
  let img = event.target.closest("img");
  if (!img) return;
  event.preventDefault();
  removePreviousShrug();
  createShrug();
  timerShrug = setTimeout(hideShrug, 2000);

  function removePreviousShrug() {
    if (timerShrug) {
      clearTimeout(timerShrug);
    }
    while (shrugDiv) {
      shrugDiv.remove();
      shrugDiv = null;
    }
  }

  function createShrug() {
    shrugDiv = document.createElement("div");
    shrugDiv.className = "shrug";
    shrugDiv.innerText = `¯\\_(ツ)_/¯`;
    document.body.append(shrugDiv);
    // position it above the annotated element (top-center)
    let coords = img.getBoundingClientRect();
    let left = coords.left + (img.offsetWidth - shrugDiv.offsetWidth) / 2;
    if (left < 0) left = 0; // don't cross the left window edge
    let top = coords.top - shrugDiv.offsetHeight;
    if (top < 0) {
      // if crossing the top window edge, show below instead
      top = coords.top + img.offsetHeight;
    }
    shrugDiv.style.left = left + "px";
    shrugDiv.style.top = top + "px";
  }

  function hideShrug() {
    shrugDiv.remove();
    shrugDiv = null;
  }
}

// OVERLAY & ACCORDION

const overlay = document.getElementById("overlay");
const acc = document.querySelector(".accordion");
const tags = document.querySelector(".tags");
let i;

const buttons = document.querySelectorAll("button");
noCursor(buttons);

acc.addEventListener("click", toggleAccordion);
overlay.addEventListener("click", closeAccordion);

function closeAccordion(e) {
  acc.classList.remove("active");
  overlay.classList.add("hidden");
  filtersList.classList.remove("abierto");
  tags.classList.remove("sombra");
}

function openAccordion(e) {
  acc.classList.add("active");
  overlay.classList.remove("hidden");
  filtersList.classList.add("abierto");
  tags.classList.add("sombra");
}

function toggleAccordion(e) {
  let isActive = acc.classList.contains("active");
  if (isActive) {
    closeAccordion();
  } else {
    openAccordion();
  }
}

document.addEventListener("keydown", (e) => {
  if (overlay.classList.contains("hidden")) return;
  else if (e.code == "Escape") {
    closeAccordion();
  }
});
