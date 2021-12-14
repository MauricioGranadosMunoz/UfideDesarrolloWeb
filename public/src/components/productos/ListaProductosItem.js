import React from 'react'
import { useDispatch } from 'react-redux';
import './productos.css';
import { uiOpenModal } from '../../actions/ui';
import { productoSetActive, productoStartDelete } from '../../actions/productos';

export const ListaNoticiasItem = ({ producto }) => {
    const { tituloProducto ,descripcionProducto, imagenProducto, precioProducto, tallaProducto, materialesProducto, cantidaddisponibleProducto } = producto;
    const dispatch = useDispatch();
    const onSelectEvent = () => {
        dispatch(productoSetActive(producto));
        dispatch(uiOpenModal());
    }
    const handleDelete = () => {
        dispatch(productoSetActive(producto));
        dispatch(productoStartDelete());
    }
    return (
        <div className="noticia-list-item">
            <div className="item-image">
                <img alt="hello" src={imagenProducto} />
            </div>
            <div className="item-content">
                <p className="item-content-title">Producto: <span>{tituloProducto}</span></p>
                <p className="item-content-author">Precio: <span>{precioProducto}</span></p>
                <p className="item-content-author"><span>Talla disponibles </span>{tallaProducto}</p>
                <p>{descripcionProducto}</p>
                <p>{materialesProducto}</p>
                <p className="item-content-author"><span>Cantidad Disponible </span>{cantidaddisponibleProducto}</p>
            </div>
            <div className="item-options">
                {/* <button className="btn btn-outline-success" onClick={ onSelectEvent }>
                <i className="fas fa-eye"></i>
            </button> */}
                <button className="btn btn-outline-warning" onClick={onSelectEvent}>
                    <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-outline-danger" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}
