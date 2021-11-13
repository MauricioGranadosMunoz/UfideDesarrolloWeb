import React from 'react'
import { useDispatch } from 'react-redux';
import './noticias.css';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';

export const ListaNoticiasItem = ({ producto }) => {
    console.log('asd',producto);
    const { tituloProducto, precioProducto, descripcionProducto } = producto;
    const dispatch = useDispatch();
    const onDoubleClick = (e) => {
        console.log(e);
        dispatch( uiOpenModal(e) );
    }

    const onSelectEvent = (e) => {
        dispatch( eventSetActive( e ) );
        onDoubleClick();
    }
    return (
        <div className="noticia-list-item">
            <div className="item-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Casquette_a_helice.jpg/220px-Casquette_a_helice.jpg"/>
            </div>
            <div className="item-content">
                <p className="item-content-title">{ tituloProducto }</p>
                <p className="item-content-author"><span>Precio </span>{ precioProducto }</p>
                <p>{ descripcionProducto }</p>
            </div>
            <div className="item-options">
            <button className="btn btn-outline-success" onClick={ onDoubleClick }>
                <i className="fas fa-eye"></i>
            </button>
            <button className="btn btn-outline-warning" onClick={ ()=>console.log('asd') }>
                <i className="fas fa-edit"></i>
            </button>
            <button  className="btn btn-outline-danger" onClick={ ()=>console.log('asd') }>
                <i className="fas fa-trash"></i>
            </button>
            </div>
        </div>
    )
}
