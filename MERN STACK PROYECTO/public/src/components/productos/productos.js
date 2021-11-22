import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productosStartLoading } from '../../actions/productos';
import { AddNewFab } from '../ui/AddNewFab';
import { Navbar } from '../ui/Navbar';
import { ProductosModal } from './ProductosModal';
import { ListaProductos } from './ListaProductos';


export const Productos = () => {

    const dispatch = useDispatch();
    const { productos } = useSelector(state => state.producto);
    useEffect(() => {

        dispatch(productosStartLoading());

    }, [dispatch, productos])
    return (
        <>
            <Navbar />
            <div className="container">
                <ListaProductos productos={productos} />
                <AddNewFab />
            </div>
            <ProductosModal />
        </>
    )
}
