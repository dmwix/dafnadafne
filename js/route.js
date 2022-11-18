const base = "";

let url_parts = location.pathname.split("/").filter((p) => p && p != base);
let slugSection = url_parts[0] || false;
let slugFiltro = url_parts[1] || false;
