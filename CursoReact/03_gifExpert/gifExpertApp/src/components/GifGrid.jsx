import {useState, useEffect } from 'react';
import PropTypes from 'prop-types';


import {GifGridItem} from './GifGridItem';
import {useFetchGifs} from './../hooks/useFetchGifs';
/**
 * Componente que se encarga de visualizar la lista de componentes
*/


export const GifGrid = ({category}) => {
    //Custom hook
    const {gifList,isLoading} = useFetchGifs(category);
  
  /*const [gifList, setGifList] = useState([]);  

  //si se deja la seccion de deoendencias vacias, el callback solo se ejecutara la primera incializacion
  useEffect( 
    ()=> {
        getGifs(category)
        .then( (imagenes) => setGifList(imagenes) )
    },[]
  )*/

  

  return (
    <>
         
        {
            /*Operador ternario para agregar el isLoading */
            //if corto: si isLoading esta en true va a ejecutar el codigo despues de &&
            isLoading && ( <h2>Cargando...</h2> )
        }

        <h1>{category}</h1>
        <div className="card-grid">
            {
                gifList.map( (gifItem) => 
                    <GifGridItem key={gifItem.id} 
                       { ...gifItem } 
                    />
                )
            }
        </div>
    </>
  )
}
GifGrid.propTypes={
    category: PropTypes.string.isRequired
} 
