import { useState, useEffect } from 'react'

const Filtros = ({ setFiltro, filtro }) => {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label>Filtrar gastos</label>
                    <select onChange={(e) => setFiltro(e.target.value)}>
                        <option value=''>--Todas las categorias--</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida</option>
                        <option value='casa'>Casa</option>
                        <option value='gastos'>Gastos</option>
                        <option value='ocio'>Ocio</option>
                        <option value='salud'>Salud</option>
                        <option value='subscripciones'>Suscribciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros