import React from 'react'
import { generarId } from '../helpers'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) =>{
    return (
        <div className='listado-gastos contenedor'>
            
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {
                gastos.map(gasto => (
                    <Gasto
                        key = {generarId()}
                        gasto = {gasto}
                    />
                ))
            }
        </div>
    )
}

export default ListadoGastos