const express = require('express');
const apiruta = require('./src/routes/ruta');

const app = express();

// const PORT = process.env.PORT || 8080

const PORT = 8080;

app.use(express.json());

app.use("/api",apiruta);
// app.get('/api',apiruta, (req, res) => {
//     // res.send('Hola, mundo!');
//   });
  


app.listen(PORT,()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
})






// app.get('/', (req, res) => {
//   res.send('Hola, mundo!');
// });

