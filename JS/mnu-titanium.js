const valores = window.location.search;
        
const urlParams = new URLSearchParams(valores);

var cliente     = urlParams.get('cliente');
var archivo     = urlParams.get('archivo');
var fecha       = urlParams.get('fecha');


/* FUNCIONES DEL TOGGLE (MENU DE BARRAS) */
const navBars = document.querySelector(".barras");
const navMenu = document.querySelector(".nav-menu");

navBars.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    /* Para hacerlo accesible a los no videntes */

    if (navMenu.classList.contains("nav-menu_visible")) {
        navBars.setAttribute("arial-label", "Cerrar Menú");
    } else {
        navBars.setAttribute("arial-label", "Abrir Menú");
    }
});


var enlaceInicio = document.getElementById("enlace_inicio");

enlaceInicio.onclick = function() {
    var url_Inicio = "index.html?cliente=" + cliente + "&archivo="+ archivo + "&fecha=" + fecha;
    window.location.href = url_Inicio;

    return false;
};


var enlaceMH = document.getElementById("enlace_mh");

enlaceMH.onclick = function() {
    var url_MH = "https://webapp.dtes.mh.gob.sv/consultaPublica?ambiente=01&codGen=" + archivo + "&fechaEmi=" + fecha;

    window.location.href = url_MH;

    return false;
};


var enlacePDF = document.getElementById("enlace_pdf");

enlacePDF.onclick = function() {
    /* Si menu de barras esta visible lo oculta */
    if (navMenu.classList.contains("nav-menu_visible")) {
        navMenu.classList.toggle("nav-menu_visible");
    }

    var carpeta = fecha.substring(0, 4) + fecha.substring(5, 7) + fecha.substring(8, 10);
    localStorage.setItem("url_PDF_origen", "../Docs/" + cliente + "/"  + carpeta +  "/" +  archivo + ".pdf");
};


var enlaceJSON = document.getElementById("enlace_json");

enlaceJSON.onclick = function() {
    /* Si menu de barras esta visible lo oculta */
    if (navMenu.classList.contains("nav-menu_visible")) {
        navMenu.classList.toggle("nav-menu_visible");
    }

    var carpeta = fecha.substring(0, 4) + fecha.substring(5, 7) + fecha.substring(8, 10);
    localStorage.setItem("url_JSON_origen", "../Docs/" + cliente + "/"  + carpeta +  "/" +  archivo + ".json");
};


var dercargaJSON = document.getElementById("descarga_json");

dercargaJSON.onclick = function() {
    /* Si menu de barras esta visible lo oculta */
    if (navMenu.classList.contains("nav-menu_visible")) {
        navMenu.classList.toggle("nav-menu_visible");
    }

    var carpeta = fecha.substring(0, 4) + fecha.substring(5, 7) + fecha.substring(8, 10)
    
    var url_JSON_origen = "../Docs/" + cliente + "/"  + carpeta +  "/" +  archivo + ".json"

    var url_JSON_destino = archivo + ".json"

    // Crea un enlace de descarga
    var downloadLink = document.createElement('a');
        downloadLink.href = url_JSON_origen;
        downloadLink.download = url_JSON_destino;

    // Añade el enlace al documento y simula un clic para iniciar la descarga
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Limpia el enlace y el objeto Blob después de la descarga
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);

    return false;
};