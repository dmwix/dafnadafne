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

// filterSelection("all") // Execute the function and show all columns
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("column");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

const todas = document.querySelectorAll('.todas')
const playa = document.querySelectorAll('.playa')

let pepito = document.querySelector('button');
pepito.addEventListener(click, function(e) {
  filterGallery(todas);
  });

function filterGallery(criterio) {
  ocultarFotos(todas);
  mostrarFotos(criterio);
};

function mostrarFotos(filtro) {
  filtro.forEach(foto => {
    foto.style.display = 'block';
  });
}

function ocultarFotos(filtro) {
  filtro.forEach(foto => {
    foto.style.display = 'none';
  });
}