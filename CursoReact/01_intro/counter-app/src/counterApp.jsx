//Generar los import de react
import React from 'react';
import ReactDOM from 'react-dom';
//Las proptypes sirven para definir el tipo a las propiedades
import PropTypes from 'prop-types';

//Generar el functional component

    //al declararse fuera del componente react no reasigna espacio en memoria para la funcion
    const handleEventClick=(event)=>{
        console.log('+1');
    }

export const CounterApp=({value})=>{

    //retornar el codigo html
    return (
        <>
            <h1>Contador:</h1>
            <h1>{ value }</h1>
            <p>Al omitir el parametro (event) le decimos a react que mande el parametro en el mismo orden</p>
            <button onClick={ handleEventClick }>+1</button>
        </>
    )

}

CounterApp.propTypes={
    value:PropTypes.number
}

CounterApp.defaultProps={
    value:0
}