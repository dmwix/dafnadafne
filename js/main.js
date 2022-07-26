// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

let ancho = document.documentElement.clientWidth;
let alto = document.documentElement.clientHeight;

// CUSTOM CURSOR
const cursor = document.getElementById("main-cursor");
const followCursor = document.getElementById("follow-cursor");

document.addEventListener("mousemove", function (e) {
  let cursorLeft = `${e.pageX - cursor.offsetWidth / 2}`;
  if (cursorLeft > ancho - cursor.offsetWidth) {
    cursorLeft = ancho - cursor.offsetWidth;
  }
  let cursorTop = `${e.pageY - cursor.offsetHeight / 2}`;
  if (cursorTop > alto - cursor.offsetHeight) {
    cursorTop = alto - cursor.offsetHeight;
  }

  let followCursorLeft = `${e.pageX - 10}`;
  if (followCursorLeft > ancho - followCursor.offsetWidth) {
    followCursorLeft = ancho - followCursor.offsetWidth;
  }
  let followCursorTop = `${e.pageY - 10}`;
  if (followCursorTop > alto - followCursor.offsetHeight) {
    followCursorTop = alto - followCursor.offsetHeight;
  }

  (cursor.style.left = cursorLeft + "px"),
    (cursor.style.top = cursorTop + "px"),
    (followCursor.style.left = followCursorLeft + "px");
  followCursor.style.top = followCursorTop + "px";
});

function noCursors(array) {
  array.forEach((el) => {
    el.addEventListener("mouseover", hideCursors);
    el.addEventListener("mouseout", showCursors);
  });
}

function hideCursors(e) {
  cursor.style.opacity = "0";
  followCursor.style.opacity = "0";
}

function showCursors() {
  cursor.style.opacity = "1";
  followCursor.style.opacity = "1";
}

const links = document.querySelectorAll(".link");
noCursors(links);
// mostrarle a dafi como queda sin esto

// DRAGGABLE PHOTOS
// ojo que se rompe cuando pasa por los links del header
const draggables = document.querySelectorAll(".draggable");
noCursors(draggables);

draggables.forEach((draggable) => {
  draggable.onmousedown = function (event) {
    draggable.classList.remove("vibrar");

    let coords = draggable.getBoundingClientRect();
    let left = coords.left;
    let top = coords.top;

    let shiftX = event.clientX - left;
    let shiftY = event.clientY - top;

    draggable.style.position = "absolute";
    draggable.style.zIndex = 100;
    document.body.append(draggable);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      let draggableLeft = pageX - shiftX;
      // OPCION QUE LOS DRAGGABLES SALGAN A LO ANCHO
      if (draggableLeft < 0) draggableLeft = 0;
      if (draggableLeft > ancho - coords.width) {
        draggableLeft = ancho - coords.width;
      }
      let draggableTop = pageY - shiftY;
      if (draggableTop < 0) draggableTop = 0;
      if (draggableTop > alto - coords.height) {
        draggableTop = alto - coords.height;
      }

      draggable.style.left = draggableLeft + "px";
      draggable.style.top = draggableTop + "px";
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);

    draggable.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      draggable.onmouseup = null;
    };

    draggable.onmouseout = function () {
      draggable.classList.add("vibrar");
    };

    draggable.ondragstart = function () {
      return false;
    };

    draggable.oncontextmenu = function () {
      return false;
    };

    document.body.addEventListener("mouseout", function (event) {
      if (
        event.clientY <= 0 ||
        event.clientX <= 0 ||
        event.clientX >= window.innerWidth ||
        event.clientY >= window.innerHeight
      ) {
        document.removeEventListener("mousemove", onMouseMove);
        draggable.onmouseup = null;
      }
    });
  };
});

// CATALOGO
const todas = document.querySelectorAll(".todas");
const filters = document.querySelectorAll(".filter");
noCursors(filters);

function filterGallery(criterio) {
  hidePhotos(todas);
  showPhotos(criterio);
}

function hidePhotos(criterio) {
  criterio.forEach((photo) => {
    photo.style.display = "none";
  });
}

function showPhotos(criterio) {
  criterio.forEach((photo) => {
    photo.style.display = "block";
    photo.classList.remove("reload-gallery");
    // reflow for triggering animation again
    photo.offsetHeight;
    photo.classList.add("reload-gallery");
  });
}

const filtersList = document.querySelector(".filters-list");
filtersList.addEventListener("click", (e) => {
  let filter = e.target.closest(".filter");
  if (!filter) return;
  let filterName = filter.innerText;
  // poner clase activa al filtro seleccionado en la lista
  document.querySelector(".current").classList.remove("current");
  filter.classList.add("current");
  // aplicar filterGallery al seleccionado
  let selected = document.querySelectorAll(`.${filterName}`);
  filterGallery(selected);
  // actualizar url FUNCIÓN APARTE??
  let url = `${filterName}.html`;
  let pechuguita = `catálogo: ${filterName}`;
  history.pushState(pechuguita, "", url);
  document.title = pechuguita;
});

function changeURL() {
  console.log("holis");
}

// CAROUSEL
const carousel = document.getElementById("carousel");
const closeCarouselBt = document.getElementById("carousel-close");
const carouselButtons = document.querySelectorAll(".carousel-button");
noCursors(carouselButtons);
const grid = document.querySelector(".grilla-fotos");
const slider = document.getElementById("slider");
let currentSlide = document.querySelector(".current-slide");

grid.addEventListener("click", openCarousel);
function openCarousel(e) {
  // currentSlide = document.querySelector(".current-slide");
  let img = e.target.closest("img");
  if (!img) return;
  carousel.classList.remove("fade-out");
  carousel.classList.add("fade-in");
  carousel.style.display = "block";
  currentSlide.textContent = "";
  // let newSlide = document.createElement("img");
  // newSlide.src = `${img.src}`;
  // currentSlide.append(newSlide);
  // currentSlide.firstChild.src = `${img.src}`;
  // currentSlide.firstChild.remove();
  // let clone = img.cloneNode(true);
  // currentSlide.append(clone);
  currentSlide.append(img.cloneNode(true));
  // const currentFilter = document.querySelector(".filter.current");
  // const currentGallery = [
  //   ...document.querySelectorAll(`.${currentFilter.innerText}`),
  // ];
  // console.log(currentGallery);
}

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.direction === "next" ? 1 : -1;
    const currentFilter = document.querySelector(".filter.current");
    const currentGallery = [
      ...document.querySelectorAll(`.${currentFilter.innerText}`),
    ];
    const activeSlide = currentSlide.firstChild;
    let index = currentGallery.findIndex(
      (image) => image.src === activeSlide.src
    );
    let newIndex = index + direction;
    if (newIndex < 0) {
      newIndex = currentGallery.length - 2;
    }
    if (newIndex >= currentGallery.length - 1) newIndex = 0;
    // activeSlide.remove();
    newActive = currentGallery[newIndex];
    currentSlide.removeAllChildNodes;
    activeSlide.replaceWith(newActive.cloneNode(true));
    // currentSlide.append(newActive.cloneNode(true));
  });
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") closeCarousel(e);
});

carousel.addEventListener("click", closeCarousel);
closeCarouselBt.addEventListener("click", closeCarousel);

function closeCarousel(e) {
  let img = e.target.closest("img");
  if (img) return;
  let arrowButton = e.target.closest(".carousel-button");
  if (arrowButton) return;
  carousel.classList.add("fade-out");
  setTimeout(() => {
    carousel.style.display = "none";
  }, 400);
  currentSlide.textContent = "";
}

// TOOLTIP ON IMGS. le falta laburo a la función todavía
document.body.addEventListener("contextmenu", showTooltip);
let tooltipElem;
let timerTooltip;

function showTooltip(event) {
  let img = event.target.closest("img");
  if (!img) return;
  event.preventDefault();
  removePreviousTooltip();
  createTooltip();
  timerTooltip = setTimeout(hideTooltip, 2000);

  function removePreviousTooltip() {
    if (timerTooltip) {
      clearTimeout(timerTooltip);
    }
    while (tooltipElem) {
      tooltipElem.remove();
      tooltipElem = null;
    }
  }

  function createTooltip() {
    tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerText = "© 2022 Dafna Szleifer";
    document.body.append(tooltipElem);
    // position it above the annotated element (top-center)
    let coords = img.getBoundingClientRect();
    let left = coords.left + (img.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // don't cross the left window edge
    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
      // if crossing the top window edge, show below instead
      top = coords.top + img.offsetHeight + 5;
    }
    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";
  }

  function hideTooltip() {
    tooltipElem.remove();
    tooltipElem = null;
  }
}

// una función = una tarea
