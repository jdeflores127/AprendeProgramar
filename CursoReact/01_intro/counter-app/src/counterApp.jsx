//Generar los import de react
//Los hooks siempre usan la palabra useState
import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
//Las proptypes sirven para definir el tipo a las propiedades
import PropTypes from 'prop-types';

//Generar el functional component

export const CounterApp=({value})=>{
    /*Para cambiar el estado de un Hook podemos desestructurar 
        en 2: una variable que mantendrà el estado y un seter que lo actualizara
        para inicializar el hook usamos useState() con el valor que se va a estar actualizando
    */
    const [counter, setCounter] = useState(value);

    //al declararse fuera del componente react no reasigna espacio en memoria para la funcion
    const sumar=(event)=>{
        console.log('+1');
        //setCounter(counter+1);
        /*El primer argumento de la lambda es el valor actual del counter y el resultado debe ser
          el cambio en el estado.
          
          Cada vez que cambiamos el valor del hook, le decimos s react que vuelva a renderizar la seccion
          del componente que esta cambiando
        */
        setCounter((counterActual)=>counterActual+1)
    }

    const restar = ()=>setCounter( (counterActual) => counterActual-1 );
    const reset = ()=>setCounter( (counterActual)=>counterActual=value )

    //retornar el codigo html
    return (
        <>
            <h1>Contador:</h1>
            <h1>{ counter }</h1>
            <p>Al omitir el parametro (event) le decimos a react que mande el parametro en el mismo orden</p>
            <button onClick={ sumar }>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>reset</button>
        </>
    )

}

CounterApp.propTypes={
    value:PropTypes.number
}

CounterApp.defaultProps={
    value:10
}