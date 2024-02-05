
        // Función para descargar el archivo JSON
        function downloadJSON() {
          // Datos del archivo JSON
          var jsonData = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
          };
    
          // Convierte el JSON a una cadena con formato
          var jsonString = JSON.stringify(jsonData, null, 2);
    
          // Crea un objeto Blob con el contenido JSON
          var blob = new Blob([jsonString], { type: 'application/json' });
    
          // Crea un enlace de descarga
          var downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = 'julio.json';
    
          // Añade el enlace al documento y simula un clic para iniciar la descarga
          document.body.appendChild(downloadLink);
          downloadLink.click();
    
          // Limpia el enlace y el objeto Blob después de la descarga
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(downloadLink.href);
        }
   
