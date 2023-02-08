import React from 'react';
import ReactDOM from 'react-dom';
//Las proptypes sirven para definir el tipo a las propiedades
import PropTypes from 'prop-types';

/*Al definir una variable fuera de la funcion, nos permite
que la variable no se vuelva a reprosesar cuando cambie el estado
del compoenente. Esta variable està en el scope global, sino que està en 
el scope del componente*/

const nombrePersonalizado = "Adrian";

//Los booleanos no se imprimen en la vista
//const nombrePersonalizado = true;

//Los arrays se imprimen de forma separada
//const nombrePersonalizado = [1,2,3,4,5,6,7,8,9];

/*Los objetos arrojan un error de ejecucion indicando que los objetos no son permitidos en 
un react child cuando se manda un objeto*/
//const nombrePersonalizado = {nombre:'hola mundo',title:'app'};

// las funciones tampoco son validas como un react child
//const nombrePersonalizado = function sumaValor(valor1,valor2){return valor1+valor2};

//Es posible ejecutar la funcion con el siguiente ejemplo {nombrePersonalizado(1,2)}
//const nombrePersonalizado = (valor1,valor2)=>valor1+valor2;

export const FirstApp = ({title,subtitulo}) => {
  
  return (
    /*Dado que react no nos permite devolver mas de un elemento 
    deberemos usar un fragmento representado por <>*/
    <>
      <div>PRIMERA APP EN REACT</div>
      <p>hola mundo {nombrePersonalizado}</p>
      <p>{title}</p>
      <code>{subtitulo+500}</code>
    </>
  )
}
//Nos permite definir el tipado del elemento
FirstApp.propTypes={
  title: PropTypes.string.isRequired,
  subtitulo: PropTypes.number
}
//El default prop se ejecuta antes del proptype y si no hay valor añade uno por defecto
FirstApp.defaultProps={
  subtitulo: 560798812
}

