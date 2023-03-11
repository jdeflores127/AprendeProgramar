/*Funcion para consumir gifs*/
/*Debido a que no es necesario reprosesar la funcion (volver a cargarla en memoria) */
export const getGifs = async (categoria)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=3OnHCMggfrZd9hlnJxoO8V9ZM4dSSnaH&q=${categoria}&limit=4`;
    const response=await fetch(url);
    //SE UTILIZA AWAIT DEBIDO A QUE LA RESPUESTA ESTÀ EN UN READABLESTREAM
    //con la inicializacion evitamos que el array data este vacio
    const {data = {}} = await response.json();

    const gifs=data.map( gif_item => ({
        id: gif_item.id,
        title: gif_item.title,
        url: gif_item.images.downsized_medium.url
    }));
    console.log("ejecutado :"+gifs);
    return gifs;    
}