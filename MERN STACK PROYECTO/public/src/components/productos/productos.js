import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productosStartLoading } from '../../actions/productos';
import {ListaProductos } from './ListaProductos';


export const Productos = () => {

    const dispatch = useDispatch();
    const { productos } = useSelector( state => state.producto );
    useEffect(() => {
        
        dispatch( productosStartLoading() );

    }, [ dispatch ])

    return (
        <div className="container">
            {  
            <>
                <ListaProductos productos={productos}/>
                <h1>asd</h1>
            </>
            }
        </div>
    )
}