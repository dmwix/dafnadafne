// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });


// CUSTOM CURSOR
const cursor = document.getElementById("main-cursor");
const followCursor = document.getElementById("follow-cursor");

document.addEventListener('mousemove', function(e) {
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    followCursor.style.left = `${e.pageX - 10}px`;
    followCursor.style.top = `${e.pageY - 10}px`;
});

function noCursors(array) {
  array.forEach(el => {
    el.addEventListener('mouseover', hideCursors);
    el.addEventListener('mouseout', showCursors);
  });
};

function hideCursors(e) {
  cursor.style.opacity = '0';
  followCursor.style.opacity = '0';
};

function showCursors() {
  cursor.style.opacity = '1';
  followCursor.style.opacity = '1';
};

const links = document.querySelectorAll('.link');
noCursors(links);



// DRAGGABLE PHOTOS
const draggables = document.querySelectorAll('.draggable');
noCursors(draggables);

draggables.forEach(draggable => {
  draggable.onmousedown = function (event) {
    draggable.classList.remove('vibrar');
    let shiftX = event.clientX - draggable.getBoundingClientRect().left;
    let shiftY = event.clientY - draggable.getBoundingClientRect().top;

    draggable.style.position = 'absolute';
    draggable.style.zIndex = 1000;
    document.body.append(draggable);

    moveAt(event.pageX, event.pageY);

    // function moveAt(pageX, pageY) {
    //   draggable.style.left = pageX - shiftX + 'px';
    //   draggable.style.top = pageY - shiftY + 'px';
    // };

    function moveAt(pageX, pageY) {
      draggable.style.left = pageX - shiftX + 'px';
      draggable.style.top = pageY - shiftY + 'px';
    };


    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    draggable.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      draggable.onmouseup = null;
    };

    draggable.onmouseout = function() {
      draggable.classList.add('vibrar');
    };

    draggable.ondragstart = function () {
      return false;
    };
  };
});



// CATALOGO
const todas = document.querySelectorAll('.todas');
const filters = document.querySelectorAll('.filter');
noCursors(filters);

function filterGallery(criterio) {
  hidePhotos(todas);
  showPhotos(criterio);
};

function hidePhotos(criterio) {
  criterio.forEach(photo => {
    photo.style.display = 'none';
  });
};

function showPhotos(criterio) {
  criterio.forEach(photo => {
    photo.style.display = 'block';
    photo.classList.remove('reload-gallery');
    // reflow for triggering animation again
    photo.offsetHeight;
    photo.classList.add('reload-gallery');
  });
};

const filtersList = document.querySelector('.filters-list');
filtersList.addEventListener('click', (e) => {
  let filter = e.target.closest('.filter')
  if (!filter) return;
  let filterName = filter.innerText;
    // poner clase activa al filtro seleccionado en la lista
  document.querySelector('.current').classList.remove('current');
  filter.classList.add('current');
  // aplicar filterGallery al seleccionado
  let selected = document.querySelectorAll(`.${filterName}`);
  filterGallery(selected);
  // actualizar url FUNCIÓN APARTE??
  let url = `/catalogo/${filterName}.html`;
  let pechuguita = `catálogo: ${filterName}`;
  history.pushState(pechuguita, '', url);
  document.title = pechuguita;
});

function changeURL() {
  console.log('holis');
}



// TOOLTIP ON IMGS. le falta laburo a la función todavía
const fotis = document.querySelectorAll('img');

fotis.forEach(foti => {
  foti.addEventListener('contextmenu', showTooltip);
});

let tooltipElem;

function showTooltip(event) {
  event.preventDefault();
  let target = event.target;

  if (document.body.contains(tooltipElem)) {
    tooltipElem.remove();
    tooltipElem = null;
    return;
  };

  // ...create the tooltip element
  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerText = '© 2022 Dafna Szleifer';
  document.body.append(tooltipElem);

  // position it above the annotated element (top-center)
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // don't cross the left window edge

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // if crossing the top window edge, show below instead
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  // hide tooltip automatically
  function hideTooltip() {
    if (document.body.contains(tooltipElem)) {
      setTimeout(() => {
        tooltipElem.remove();
        tooltipElem = null;
      }, 1500)
    };
  };

  hideTooltip();

}

// una función = una tarea