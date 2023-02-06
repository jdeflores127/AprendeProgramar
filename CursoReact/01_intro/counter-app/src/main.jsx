import React from 'react';
import ReactDOM from 'react-dom/client';

//todo en react se basa en un componente basado en funciones que es una funcion
export function App(){
    //una forma de abreviar el document.createElement de js
    return (<h1>Hola mundo alv!!!!</h1>);
}

export function Hola(){
    return "hola";
}

export const FuncionRafc = () => {
  return (
    <div>FuncionRafc</div>
  )
}
