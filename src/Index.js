const express = require('express')
const app = express()
const path = require("path")
const port = 3000

app.get('/', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "index.html");
    respuesta.sendFile(rutaDeArchivo);
});
app.get('/pagina2', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "pagina2.html");
    respuesta.sendFile(rutaDeArchivo);
});
app.get('/calculadora', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "calculador.html");
    respuesta.sendFile(rutaDeArchivo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
