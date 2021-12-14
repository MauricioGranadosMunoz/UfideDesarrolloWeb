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
                <p className="item-content-result title"><span>{tituloProducto}</span></p>
                <p className="item-content-result descrip"><span>{descripcionProducto}</span></p>
                <p className="item-content-result precio">Precio: <span>${precioProducto}</span></p>
                <p className="item-content-result talla">Talla: <span>{tallaProducto}</span></p>
                <p className="item-content-result materales">Materiales: <span>{materialesProducto}</span></p>
                <p className="item-content-result cantidad">Cantidad: <span>{cantidaddisponibleProducto} unidades</span></p>
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
