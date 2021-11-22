import { types } from '../types/types';
// {
//     id: 'askdjhaksdjas',
//     title: 'Cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add( 2, 'hours' ).toDate(),
//     notes: 'Comprar el pastel',
//     user: {
//         _id: '123',
//         name: 'Fernando'
//     }
// }

const initialState = {
    productos: [],
    activeProduct: null
};


export const productoReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.productoSetActive:
            return {
                ...state,
                activeProduct: action.payload
            }
        
        case types.productoAddNew:
            return {
                ...state,
                productos: [
                    ...state.productos,
                    action.payload
                ]
            }
    
        case types.productoClearActiveProducto:
            return {
                ...state,
                activeProduct: null
            }
        case types.productoLoaded:
            return {
                ...state,
                productos: [ ...action.payload ]
            }

        default:
            return state;
    }


}
