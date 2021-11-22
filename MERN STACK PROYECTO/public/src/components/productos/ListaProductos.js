import React from 'react'
import { ListaNoticiasItem } from './ListaProductosItem'

export const ListaProductos = ({productos}) => {
    return (
        <div>
        {
            (typeof(productos) != 'undefined') && productos.map( producto => 
                <ListaNoticiasItem key={producto.id} producto={producto}/>
            )
        }
        </div>
    ) 
}
