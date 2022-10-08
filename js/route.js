const base = "";

let url_parts = location.pathname.split("/").filter((p) => p && p != base);
let slugFiltro = url_parts[1] || false;
let slugFoto = url_parts[2] || false;

// document.querySelector("#data").innerHTML = `
//         filtro: ${filtro}<br>
//         foto: ${foto}
//     `;
