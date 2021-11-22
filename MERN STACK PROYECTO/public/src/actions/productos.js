import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';




// const productoAddNew = (event) => ({
//     type: types.productoAddNew,
//     payload: event
// });

export const productoSetActive = (event) => ({
    type: types.productoSetActive,
    payload: event
});

export const productoClearActiveProducto = () => ({ type: types.productoClearActiveProducto });

export const productosStartLoading = ( producto ) => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchConToken('producto', producto, 'GET');
            const body = await resp.json();

            // const productos = prepareNoticias(  );
            dispatch( productosLoaded( body.productosTienda ) );

        } catch (error) {
            console.log(error)
        }

    }
}


export const productoStartUpdate = ( producto ) => {
    return async(dispatch) => {

        try {
            const resp = await fetchConToken(`producto/${ producto.id }`, producto, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( productoUpdated( producto ) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}

const productoUpdated = ( producto ) => ({
    type: types.productoUpdated,
    payload: producto
});

const productosLoaded = (productos) => ({
    type: types.productoLoaded,
    payload: productos
})