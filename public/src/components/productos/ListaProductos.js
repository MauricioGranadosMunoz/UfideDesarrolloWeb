import React from 'react'
import { ListaNoticiasItem } from './ListaProductosItem'

export const ListaProductos = ({ productos }) => {

    const cargadoComponent = () => {
        return (
            <div>
                <h1> CARGANDO</h1>
            </div>
        )
    }

    return (
        <div className="noticia-list-item-wrapper">
            {
                (typeof (productos) == 'undefined') ? cargadoComponent() : productos.map(producto =>
                    <ListaNoticiasItem key={producto.id} producto={producto} />
                )
            }
        </div>
    )
}
