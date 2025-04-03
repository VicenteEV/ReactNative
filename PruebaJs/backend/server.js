// Requerimos Express
const express = require('express');

// Creamos una aplicación Express
const app = express();

// Definimos el puerto donde estará escuchando el servidor
const port = 3000;

// Creamos una ruta simple de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Hacemos que el servidor escuche en el puerto definido
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
