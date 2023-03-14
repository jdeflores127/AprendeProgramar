import {useState, useEffect} from 'react'

import { getGifs } from './../Apis/getGifs';


export const useFetchGifs = (category) => {
    
    /*normalmente un functional component retorna codigo jsx, pero si el archivo retorna
    un objeto, se vuelve un hook. Un hook es una funcion*/

    const [gifList, setGifList] = useState([]);  
    const [isLoading,setIsLoading] = useState(true);
    //si se deja la seccion de deoendencias vacias, el callback solo se ejecutara la primera incializacion
    useEffect( 
        ()=> {
            setIsLoading(false);
            getGifs(category)
                .then( (category_item) => setGifList(category_item) )
        },[]
    )
    
    //En ECMS6 si el nombre del objeto y el valor se llaman igual, puedo omitir el valor
    return {
        gifList,
        isLoading
    }
}
