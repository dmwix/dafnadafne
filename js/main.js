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

function hideCursors() {
    cursor.style.opacity = '0';
    followCursor.style.opacity = '0';
};

function showCursors() {
cursor.style.opacity = '1';
followCursor.style.opacity = '1';
};

const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('mouseover', hideCursors);
    link.addEventListener('mouseout', showCursors);
})

// DRAGGABLE PHOTOS
const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.onmousedown = function(event) { 
      let shiftX = event.clientX - draggable.getBoundingClientRect().left;
      let shiftY = event.clientY - draggable.getBoundingClientRect().top;
    
      draggable.style.position = 'absolute';
      draggable.style.zIndex = 1000;
      document.body.append(draggable);
    
      moveAt(event.pageX, event.pageY);
    
      function moveAt(pageX, pageY) {
        draggable.style.left = pageX - shiftX + 'px';
        draggable.style.top = pageY - shiftY + 'px';
      }
    
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
    
      document.addEventListener('mousemove', onMouseMove);
    
      draggable.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        draggable.onmouseup = null;
      };

      draggable.ondragstart = function() {
          return false;
      };      
      };

      draggable.addEventListener('mouseover', hideCursors);
      draggable.addEventListener('mouseout', showCursors);
});



// CATALOGO

const todas = document.querySelectorAll('.todas');
const filters = document.querySelectorAll('.filter');

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
    photo.offsetHeight;
    photo.classList.add('reload-gallery');
  });
};

filters.forEach(filter => {
  filter.addEventListener('click', (e) => {
    let filterName = e.target.innerText;
    document.querySelector('.current').classList.remove('current');
    e.target.classList.add('current');
    let selected = document.querySelectorAll(`.${filterName}`);
    filterGallery(selected);
  });
  filter.addEventListener('mouseover', hideCursors);
  filter.addEventListener('mouseout', showCursors);
});


// TOOLTIP ON IMGS

const fotis = document.querySelectorAll('img');

fotis.forEach(foti => {
  foti.addEventListener('contextmenu', showTooltip);
});

function showTooltip(event) {
  event.preventDefault();
  let target = event.target;

  // ...create the tooltip element
  let tooltipElem = document.createElement('div');
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


  // hide tooltip
  function hideTooltip() {
    if (tooltipElem) {
      setTimeout(() => {
        tooltipElem.remove();
        tooltipElem = null;
      }, 1500)
    };
  };
  
  hideTooltip();

};

  // si existe tooltip la función no puede correr