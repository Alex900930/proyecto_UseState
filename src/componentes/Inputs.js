import React from 'react';
import '../hojas-estilo/Inputs.css';

function Inputs({cambios, posicion, input }) {
    
  return (
    <div className='caja-principal'>
        <label htmlFor={`u+${posicion}`}>{cambios[posicion].moneda}</label>
        <input id={`u+${posicion}`} type='number' value={input} min={0} readOnly/>
    </div>
  )
}

export default Inputs