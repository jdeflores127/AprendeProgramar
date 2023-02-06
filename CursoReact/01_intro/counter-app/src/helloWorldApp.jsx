import React from 'react';
import ReactDOM from 'react-dom/client';

//Importamos la funcion App del archivo main
import {App,Hola} from './main';
import {FirstApp} from './FirstApp';

import './estilos.css'

//Renderizar en el index.html, se usa el modo estricto para validar la sintaxis correcta.
//en el tag App
//Para agregar una propiedad, incluirla dentro del compoennte a renderizar, ej propiedad title.
//Tambien se pudeden mandar numeros usando {1234}
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="propiedad desde padre" subtitulo={1234} />
    </React.StrictMode>
);