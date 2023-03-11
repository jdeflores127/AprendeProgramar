import React from 'react'

export const GifGridItem = ({id,url}) => {
  
    return (
        <div className="card">
            <img src={url} alt="Imagen no disponible"/>
        </div>
    )
}
