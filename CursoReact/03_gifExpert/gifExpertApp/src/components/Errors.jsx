import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const Errors = ({mensajeError,limpiaMensajeError}) => {
        
    return (
        <>
            {
                limpiaMensajeError?
                undefined:
                <div> {mensajeError} </div>
            }            
        </>
    )
}

Errors.propTypes={
    mensajeError: PropTypes.string,
    limpiaMensajeError: PropTypes.bool.isRequired
} 