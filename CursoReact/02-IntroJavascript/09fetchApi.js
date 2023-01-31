const peticion = fetch('https://api.giphy.com/v1/gifs/random?api_key=3OnHCMggfrZd9hlnJxoO8V9ZM4dSSnaH');


peticion.then(response=>response.json())
.then(jsonResponse=>{
    const {url:urlImagen}=jsonResponse.data.images.original;
    const link=document.createElement('img');
    link.src=urlImagen;
    document.body.append(link);
})
.catch((error)=>{console.log(error)});