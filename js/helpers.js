// shuffle array with Fisher-Yates algorithm
function fyShuffle(arr) {
  let i = arr.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
  }
  return arr;
}

function noCursor(array) {
  array.forEach((el) => {
    el.addEventListener("mouseover", hideCursor);
    el.addEventListener("mouseout", showCursor);
  });

  function hideCursor() {
    cursor.style.opacity = "0";
  }

  function showCursor() {
    cursor.style.opacity = "1";
  }
}

function changeUrl(url, state) {
  history.pushState(state, "", location.origin + url);
}

function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
}
