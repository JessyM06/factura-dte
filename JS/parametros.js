const valores = window.location.search;
        
const urlParams = new URLSearchParams(valores);
var cliente     = urlParams.get('cliente');
var archivo     = urlParams.get('archivo');
var fecha       = urlParams.get('fecha');

var enlaceInicio = document.getElementById("enlace_inicio");

enlaceInicio.onclick = function() {
    var urlInicio = "index.html?cliente=" + encodeURIComponent(cliente) + "&archivo=" + encodeURIComponent(archivo) + "&fecha=" + encodeURIComponent(fecha);
    window.location.href = url_Inicio;

    return false;
};


var enlaceMH = document.getElementById("enlace_mh");

enlaceMH.onclick = function() {
    var urlMH = "index.html?cliente=" + encodeURIComponent(cliente) + "&archivo=" + encodeURIComponent(archivo) + "&fecha=" + encodeURIComponent(fecha);
    window.location.href = url_MH;

    return false;
};

var enlacePDF = document.getElementById("enlace_pdf");

enlacePDF.onclick = function() {
    var urlPDF = "index.html?cliente=" + encodeURIComponent(cliente) + "&archivo=" + encodeURIComponent(archivo) + "&fecha=" + encodeURIComponent(fecha);
    window.location.href = url_PDF;

    return false;
};

var enlaceJSON = document.getElementById("enlace_json");

enlaceJSON.onclick = function() {
    var urlJSON = "index.html?cliente=" + encodeURIComponent(cliente) + "&archivo=" + encodeURIComponent(archivo) + "&fecha=" + encodeURIComponent(fecha);
    window.location.href = url_JSON;

    return false;
};

//var descargaJSON = document.getElementById("descarga_json");
//
//descargaJSON.onclick = function() {
//    var urlDescargaJSON = "index.html?cliente=" + encodeURIComponent(cliente) + "&archivo=" + encodeURIComponent(archivo) + "&fecha=" + encodeURIComponent(fecha);
//    window.location.href = url_descarga_JSON;
//
//    return false;
//};


//        var a = 'https://webapp.dtes.mh.gob.sv/consultaPublica?ambiente=01&codGen=33066D43-1498-2094-8056-882661910410&fechaEmi=2023-09-28'
// http://127.0.0.1:5500/index.html?cliente=0001&archivo=33066D43-1498-2094-8056-882661910410&fecha=2023-09-28

function getParameterByName(name, urlInicio) {
    if (!urlInicio) urlInicio = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(urlInicio);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getParameterByName(name, urlMH) {
    if (!urlMH) urlMH = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(urlMH);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getParameterByName(name, urlPDF) {
    if (!urlPDF) urlPDF = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(urlPDF);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getParameterByName(name, urlJSON) {
    if (!urlJSON) urlJSON = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(urlJSON);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//function getParameterByName(name, urlDescargaJSON) {
//    if (!urlDescargaJSON) urlDescargaJSON = window.location.href;
//    name = name.replace(/[\[\]]/g, "\\$&");
//    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//        results = regex.exec(urlDescargaJSON);
//    if (!results) return null;
//    if (!results[2]) return '';
//    return decodeURIComponent(results[2].replace(/\+/g, " "));
//}


var clienteParam = getParameterByName('cliente');
var archivoParam = getParameterByName('archivo');
var fechaParam   = getParameterByName('fecha');

var carpeta = fechaParam.substring(0, 4) + fechaParam.substring(5, 7) + fechaParam.substring(8, 10)

if (clienteParam && archivoParam && fechaParam) {
    // Construir la URL externa con los parámetros
    var url_Inicio = "/index.html?cliente=" + encodeURIComponent(clienteParam) + "&archivo=" + encodeURIComponent(archivoParam) + "&fecha=" + encodeURIComponent(fechaParam);

    // Construir la URL externa con los parámetros
    var url_PDF = "/HTML/doc_grafico.html?cliente=" + encodeURIComponent(clienteParam) + "&archivo=" + encodeURIComponent(archivoParam) + "&fecha=" + encodeURIComponent(fechaParam);
 
    // Construir la URL externa con los parámetros
    var url_JSON = "/HTML/doc_json.html?cliente=" + encodeURIComponent(clienteParam) + "&archivo=" + encodeURIComponent(archivoParam) + "&fecha=" + encodeURIComponent(fechaParam);
}

if (archivoParam && fechaParam) {
    // Construir la URL externa con los parámetros
    var url_MH = "https://webapp.dtes.mh.gob.sv/consultaPublica?ambiente=01&codGen=" + encodeURIComponent(archivoParam) + "&fechaEmi=" + encodeURIComponent(fechaParam);
}

function descargar() {
    if (clienteParam && archivoParam && carpeta ) {
        // Construir la URL externa con los parámetros
        var url_JSON_origen = "../Docs/" + encodeURIComponent(clienteParam) + "/"  + encodeURIComponent(carpeta) +  "/" +  encodeURIComponent(archivoParam) + ".json"

        var url_JSON_destino = archivoParam + ".json"

        // Crea un enlace de descarga
        var downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(url_JSON_origen);
            downloadLink.download = url_JSON_destino;
    
        // Añade el enlace al documento y simula un clic para iniciar la descarga
        document.body.appendChild(downloadLink);
        downloadLink.click();
    
        // Limpia el enlace y el objeto Blob después de la descarga
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);
    }
}



 




