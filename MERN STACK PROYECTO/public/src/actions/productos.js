import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';


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
const productosLoaded = (productos) => ({
    type: types.productoLoaded,
    payload: productos
})