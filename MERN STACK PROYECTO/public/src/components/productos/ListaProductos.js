import React from 'react'
import { ListaNoticiasItem } from './ListaProductosItem'

export const ListaProductos = ({productos}) => {
    console.log(productos);
    return (
        <div>
        {
            (typeof(productos) != 'undefined') && productos.map( producto => <ListaNoticiasItem key={producto._id} producto={producto}/>)
        }
        </div>
    ) 
}
