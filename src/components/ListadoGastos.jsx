import React from 'react'
import { generarId } from '../helpers'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar,eliminarGasto}) =>{
    return (
        <div className='listado-gastos contenedor'>
            
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {
                gastos.map(gasto => (
                    <Gasto
                        key = {generarId()}
                        gasto = {gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto = {eliminarGasto}
                    />
                ))
            }
        </div>
    )
}

export default ListadoGastos