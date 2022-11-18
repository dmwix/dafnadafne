document.addEventListener("DOMContentLoaded", homeReady);

function homeReady() {}

// HOME
const mainHome = document.querySelector(".main-home");

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
  let img = document.createElement("img");
  wrapperDiv.append(img);
  img.outerHTML = `<img src=${photo.src.small} alt="${photo.title}" class="draggable ${photo.home_orientation}" />`;
  mainHome.prepend(wrapperDiv);
});

// DRAGGABLE PHOTOS
const draggables = document.querySelectorAll(".draggable");
noCursor(draggables);
const links = document.querySelectorAll(".link");

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

// VIDEO
const videoWrapper = document.querySelector(".video-wrapper");
const homeVideos = fyShuffle(videos);
let count = 0;

function loadVideo() {
  if (!document.body.contains(mainHome)) return;
  videoWrapper.innerHTML = `<video autoplay muted playsinline> <source src="${homeVideos[count].src}" type="video/mp4"/> </video>`;
  const video = document.querySelector("video");
  count++;
  if (count === homeVideos.length) {
    count = 0;
  }
  video.addEventListener("ended", (e) => {
    loadVideo(count);
  });
}

loadVideo();
