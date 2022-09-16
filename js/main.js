// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

let ancho = document.documentElement.clientWidth;
let alto = document.documentElement.clientWidth;

function currentWindowSize() {
  alto = document.documentElement.clientWidth;
  ancho = document.documentElement.clientWidth;
}

window.onresize = currentWindowSize;

// HOME
const mainHome = document.querySelector(".main-home");

// shuffle array with Fisher-Yates algorithm
function fyShuffle(arr) {
  let i = arr.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
  }
  return arr;
}

let landscapeHomeSelection = photos.filter(
  (p) => p.home_orientation == "landscape"
);
fyShuffle(landscapeHomeSelection);
landscapeHomeSelection = landscapeHomeSelection.splice(0, 3);

let portraitHomeSelection = photos.filter(
  (p) => p.home_orientation == "portrait"
);
fyShuffle(portraitHomeSelection);
portraitHomeSelection = portraitHomeSelection.splice(0, 2);

let homePhotos = [
  landscapeHomeSelection[0],
  landscapeHomeSelection[1],
  portraitHomeSelection[0],
  portraitHomeSelection[1],
  landscapeHomeSelection[2],
];

homePhotos.reverse();

homePhotos.forEach((photo) => {
  if (!document.body.contains(mainHome)) return;
  let wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("home-photo", "tiembla");
  let picture = document.createElement("picture");
  wrapperDiv.append(picture);
  picture.innerHTML = `<source media="(min-width: 500px)" srcset=${photo.src.large} /> <img src=${photo.src.large} alt="${photo.title}" class="draggable" />`;
  mainHome.prepend(wrapperDiv);
});

// CUSTOM CURSORS
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

const linkcitos = document.querySelectorAll("a");
const links = document.querySelectorAll(".link");
noCursors(linkcitos);

// DRAGGABLE PHOTOS
const draggables = document.querySelectorAll(".draggable");
noCursors(draggables);

draggables.forEach((draggable) => {
  draggable.onmousedown = function (event) {
    draggable.classList.remove("tiembla");

    let coords = draggable.getBoundingClientRect();
    let left = coords.left;
    let top = coords.top;

    let shiftX = event.clientX - left;
    let shiftY = event.clientY - top;

    draggable.style.position = "absolute";
    draggable.style.zIndex = 3;
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
      draggable.classList.add("tiembla");
    };

    draggable.ondragstart = function () {
      return false;
    };

    draggable.oncontextmenu = function () {
      return false;
    };

    // prevenir que se rompa el mecanismo cuando el cursor hoverea en los links
    links.forEach((link) => {
      link.addEventListener("mouseover", function () {
        document.removeEventListener("mousemove", onMouseMove);
      });
    });

    // prevenir que se rompa el mecanismo cuando el cursor sale del documento
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
  photoDiv.innerHTML = `<img src="${photo.src.large}" alt="${
    photo.title
  }" class="${photo.tags.join(" ")}">`;
  grid.append(photoDiv);
});

noCursors([...grid.children]);

const todas = document.querySelectorAll("img");
const filters = document.querySelectorAll(".filter");
noCursors(filters);

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

const previousTitle = document.title;

function updateTitle(filterName) {
  let titulo = `catálogo: ${filterName}`;
  if (filterName == "todas") {
    document.title = previousTitle;
  } else {
    document.title = titulo + " | dafna szleifer";
  }
}

function changeUrl(url, filterName) {
  history.pushState(filterName, "", location.origin + url);
}

let acco = document.querySelector(".accordion");

filtersList.addEventListener("click", (e) => {
  let filter = e.target.closest(".filter");
  if (!filter) return;
  let filterName = filter.innerText;
  // poner clase activa al filtro seleccionado en la lista
  activeFilter(filter);
  // aplicar filterGallery al seleccionado
  let selected = document.querySelectorAll(`.${filterName}`);
  filterGallery(selected);
  acco.click();

  // actualizar url y actualizar el título del sitio
  let url = `/catalogo/${filterName}`;
  updateTitle(filterName);
  changeUrl(url, filterName);

  window.onpopstate = (e) => {
    if (e.state != null) {
      filterGallery(document.querySelectorAll(`.${e.state}`));
      const match = [...filters].find((element) => {
        return element.textContent.includes(e.state);
      });
      activeFilter(match);
      updateTitle(e.state);
    } else {
      filterGallery(todas);
      let todasTag = document.querySelector(".filter");
      activeFilter(todasTag);
      updateTitle("todas");
    }
  };
});

// CAROUSEL
const carouselWindow = document.getElementById("carousel-window");
const carousel = document.getElementById("carousel");
const carouselNavigation = document.querySelectorAll(".carousel-navigation");
const closeCarouselButton = document.getElementById("carousel-close");
noCursors(carouselWindow.querySelectorAll("button"));
let slideWrapper = document.querySelector(".slide-wrapper");
let currentSlide;

function openCarousel(e) {
  let img = e.target.closest("img");
  if (!img) return;
  carouselWindow.classList.remove("fade-out");
  carouselWindow.classList.add("fade-in");
  carouselWindow.style.display = "block";
  // esto x ahora no hace falta
  // slideWrapper.textContent = "";
  let name = img.alt;
  let foti = photos.find((p) => p.title == name);
  slideWrapper.innerHTML = `<img src="${foti.src.large}" alt="${foti.title}">`;
  // le saco la clase así no agrando la array de dicha clase sumándole un item repetido
  // currentSlide.className = "";
  // slideWrapper.append(currentSlide);
  document.body.style.overflowY = "hidden";
  cursor.style.display = "none";
  document.addEventListener("mousemove", cursorFlechita);
}

function closeCarousel(e) {
  let img = e.target.closest("img");
  if (img) return;
  if (e.target.closest(".carousel-navigation")) return;
  carouselWindow.classList.add("fade-out");
  setTimeout(() => {
    carouselWindow.style.display = "none";
  }, 200);
  // borro la current slide
  // slideWrapper.textContent = "";
  document.body.style.overflowY = "auto";

  document.removeEventListener("mousemove", cursorFlechita);
  flecha.style.display = "none";
  cursor.style.display = "block";
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
    // flecha.innerHTML = "&#10094;";
    flecha.innerHTML = `<img src="/images/previous.svg">`;
    flecha.dataset.direction = "previous";
  } else {
    flecha.innerHTML = `<img src="/images/next.svg">`;
    // flecha.innerHTML = "&#10095;";
    flecha.dataset.direction = "next";
  }
}

function cursorFlechitaNavigation() {
  const direction = flecha.dataset.direction === "next" ? 1 : -1;
  const currentFilter = document.querySelector(".filter.current");
  // const currentGallery = [
  //   ...document.querySelectorAll(`.${currentFilter.innerText}`),
  // ];
  const currentGallery = photos.filter((p) =>
    p.tags.includes(currentFilter.innerText)
  );
  currentSlide = slideWrapper.firstChild;
  let index = currentGallery.findIndex(
    (image) => image.title === currentSlide.alt
  );
  let newIndex = index + direction;
  if (newIndex < 0) {
    newIndex = currentGallery.length - 1;
  }
  if (newIndex >= currentGallery.length) newIndex = 0;
  // slideWrapper.textContent = "";
  currentSlide = currentGallery[newIndex];
  // console.log(currentSlide);
  slideWrapper.innerHTML = `<img src="${currentSlide.src.large}" alt="${currentSlide.title}">`;
  // newSlide = currentSlide.cloneNode(true);
  // newSlide.className = "";
  // slideWrapper.append(newSlide);
}

document.addEventListener("keydown", (e) => {
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

grid.addEventListener("click", openCarousel);
grid.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
carousel.addEventListener("click", cursorFlechitaNavigation);
// carouselWindow.addEventListener("click", closeCarousel);
// carousel.addEventListener("click", navigateCarousel);
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

const overlay = document.getElementById("overlay");
const acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    overlay.classList.toggle("hidden");
    let panel = this.nextElementSibling;
    panel.classList.toggle("abierto");
    // if (panel.style.maxHeight) {
    //   panel.style.maxHeight = null;
    // } else {
    //   // panel.style.maxHeight = panel.scrollHeight + "px";
    //   // panel.style.maxHeight = panel.clientHeight + "px";
    //   panel.style.maxHeight = "100%";
    // }
  });
}

noCursors(acc);

overlay.addEventListener("click", () => {
  acco.click();
});
