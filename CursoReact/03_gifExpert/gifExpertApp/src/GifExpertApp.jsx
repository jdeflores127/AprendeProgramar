import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';
import {Errors} from './components/Errors';

export const GiffExpertApp=()=>{
    //Para cambiar el estado del html implementamos un Hook
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(undefined);
    const [limpiarError, setLimpiarError] = useState(false);

    const showMensajeError = (mensaje)=>{
        setError((mensajeActual)=>mensaje);
        setLimpiarError(()=>false);
    }
        

    const limpiaErroresPrevios = ()=>
        setLimpiarError(()=>true)

    const agregaCategoria = (categoriaItem)=>{
        setCategories( (categoriaActual)=>{
            //const nuevaCategoria = categoriaActual.filter(()=>true).push('la Gozadera');
            //Ejemplo con el operador spread para clonar objetos
            if(categoriaActual.includes(categoriaItem)){
                showMensajeError(`La categoria ${categoriaItem} se encuentra repetida, ingrese otra`)
                return categoriaActual; 
            }else{ 
                limpiaErroresPrevios();
                return [...categoriaActual,categoriaItem];
            }
        })
    }

    return (
        <>
            <h1>GiffExpert aplicacion </h1>

            {/*textbox para agregar componentes*/}
            <AddCategory agregaCategoria={ agregaCategoria }/>

            {
                /*Listado de gifs*/
                categories.map( (categoria_item => (
                    <GifGrid category={categoria_item}/>
                )) )
            }

            {/*Mostrar errores al insertar  */}
            <Errors mensajeError={error} limpiaMensajeError={limpiarError}/>

        </>
    );
}