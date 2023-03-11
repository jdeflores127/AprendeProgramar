import {useState, useEffect } from 'react';
import {getGifs} from './../Apis/getGifs';
import PropTypes from 'prop-types';

import {GifGridItem} from './GifGridItem';
/**
 * Componente que se encarga de visualizar la lista de componentes
*/


export const GifGrid = ({category}) => {
  const [gifList, setGifList] = useState([]);  

  //si se deja la seccion de deoendencias vacias, el callback solo se ejecutara la primera incializacion
  useEffect( 
    ()=> {
        getGifs(category)
        .then( (imagenes) => setGifList(imagenes) )
    },[]
  )

  

  return (
    <>
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
