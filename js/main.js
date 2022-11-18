document.addEventListener("DOMContentLoaded", ready);

function ready() {
  currentWindowSize();
  window.onresize = currentWindowSize;
}

let ancho, alto;

function currentWindowSize() {
  alto = document.documentElement.clientWidth;
  ancho = document.documentElement.clientWidth;
}

// CUSTOM CURSOR
const cursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", function (e) {
  let cursorLeft = `${e.clientX - cursor.offsetWidth / 2}`;
  if (cursorLeft > ancho - cursor.offsetWidth) {
    cursorLeft = ancho - cursor.offsetWidth;
  }
  let cursorTop = `${e.clientY - cursor.offsetHeight / 2}`;
  if (cursorTop > alto - cursor.offsetHeight) {
    cursorTop = alto - cursor.offsetHeight;
  }

  cursor.style.left = cursorLeft + "px";
  cursor.style.top = cursorTop + "px";
});

const linkcitos = document.querySelectorAll("a");
noCursor(linkcitos);
