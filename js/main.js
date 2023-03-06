let loc = localStorage.getItem("loc");

if (loc == null) {
  loc = "es";
  localStorage.setItem("loc", loc);
}

document.body.classList.add(`loc-${loc}`);

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  currentWindowSize();
  window.onresize = currentWindowSize;
  translate();
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

// LANGUAGE

let languageButton = document.querySelectorAll(".locale");
languageButton.forEach((button) => {
  button.addEventListener("click", changeLocale);
});

function changeLocale(e) {
  e.preventDefault();
  loc = e.target.dataset.loc;
  localStorage.setItem("loc", loc);
  document.body.classList.remove("loc-es", "loc-en");
  document.body.classList.add(`loc-${loc}`);
  translate();
}

function translate() {
  document.querySelectorAll("[data-loc-key]").forEach((el) => {
    let key = el.dataset.locKey;
    try {
      el.innerText = localization[key][loc];
    } catch (error) {}
  });
}
