import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';

import { uiCloseModal } from '../../actions/ui';
import { productoClearActiveProducto, productoStartAddNew, productoStartUpdate } from '../../actions/productos';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'auto'
    }
};
Modal.setAppElement('#root');

const initEvent = {
    tituloProducto: '',
    descripcionProducto: '',
    imagenProducto: '',
    precioProducto: 0,
    tallaProducto: 0,
    materialesProducto: '',
    cantidaddisponibleProducto: 0

}

export const ProductosModal = () => {

    const { modalOpen } = useSelector(state => state.ui);
    const { activeProduct } = useSelector(state => state.producto);
    const dispatch = useDispatch();

    const [titleValid, setTitleValid] = useState(true);

    const [formValues, setFormValues] = useState(initEvent);

    const { descripcionProducto, tituloProducto, imagenProducto, cantidaddisponibleProducto, materialesProducto, tallaProducto, precioProducto } = formValues;

    const [payload] = useState(new FormData());

    useEffect(() => {
        if (activeProduct) {
            setFormValues(activeProduct);
        } else {
            setFormValues(initEvent);
        }
    }, [activeProduct, setFormValues])



    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: (target.name === 'file') ? target.files[0] : target.value
        });
    }


    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(productoClearActiveProducto());
        setFormValues(initEvent);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (tituloProducto.trim().length < 2) {
            return setTitleValid(false);
        }

        if (activeProduct) {
            dispatch(productoStartUpdate(formValues))
        } else {
            payload.append('file', formValues.file );
            payload.append('data',  JSON.stringify( formValues));
            dispatch(productoStartAddNew(payload));
        }


        setTitleValid(true);
        dispatch(productoClearActiveProducto());
        closeModal();

    }


    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h3 className="modal-h3"> {(activeProduct) ? 'Editar Producto' : 'Nuevo Producto'} </h3>

            <form
                className="container"
                onSubmit={handleSubmitForm}

            >
                <div className="form-group" overflow-y="scroll">
                    <div className={`form-group ${activeProduct && 'hide-upload'} `}>
                        <label htmlFor='file'>File upload</label>
                        <input
                            id='file'
                            name='file'
                            type='file'
                            onChange={handleInputChange}
                            className='form-control'
                        />
                    </div>
                    <div className={`form-group ${!activeProduct && 'hide-upload'} `}>
                    <label>Imagen del producto</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && 'is-invalid'} `}
                        placeholder="Imagen del producto"
                        name="imagenProducto"
                        autoComplete="off"
                        value={imagenProducto}
                        onChange={handleInputChange}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label>Nombre del producto</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && 'is-invalid'} `}
                        placeholder="Nombre del producto"
                        name="tituloProducto"
                        autoComplete="off"
                        value={tituloProducto}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Cantidad Disponible</label>
                    <input
                        type="number"
                        className={`form-control ${!titleValid && 'is-invalid'} `}
                        placeholder="Cantidad Disponible"
                        name="cantidaddisponibleProducto"
                        autoComplete="off"
                        value={cantidaddisponibleProducto}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Talla Disponible</label>
                    <input
                        type="number"
                        className={`form-control ${!titleValid && 'is-invalid'} `}
                        placeholder="Talla Disponible"
                        name="tallaProducto"
                        autoComplete="off"
                        value={tallaProducto}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Materiales</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && 'is-invalid'} `}
                        placeholder="Materiales"
                        name="materialesProducto"
                        autoComplete="off"
                        value={materialesProducto}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Precio</label>
                    <input
                        type="number"
                        className={`form-control ${!titleValid && 'is-invalid'} `}
                        placeholder="Precio"
                        name="precioProducto"
                        autoComplete="off"
                        value={precioProducto}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Descripción del producto"
                        rows="3"
                        name="descripcionProducto"
                        value={descripcionProducto}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>


            </form>

        </Modal>
    )
}
