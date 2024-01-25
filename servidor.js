const express = require('express')
import { initializeApp } from "firebase/app";
const app = express()
const port = 5002

// Conexion a la Base de Datos en Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCuBhXj2jdtQSE37OLm1KJYrysv773zkkg",
  authDomain: "crud-mars-25.firebaseapp.com",
  projectId: "crud-mars-25",
  storageBucket: "crud-mars-25.appspot.com",
  messagingSenderId: "525479195642",
  appId: "1:525479195642:web:dbccdfc805b93d4a68ea43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

app.get('/', (req, res) => {
    res.send('Respuesta de Raiz 😎')
})

app.get('/contacto', (req, res) => {
    res.send('Respuesta desde Contacto 😎')
})

app.listen(port, () => {
    console.log('Servidor Escuchando: ', port)
})