/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getProductosTienda,crearProductoTienda, actualizarProductoTienda,eliminarProductoTienda } = require('../controllers/productoTienda');

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use( validarJWT );


// Obtener eventos 
router.post('/', getProductosTienda );

// Crear un nuevo evento
router.post(
    '/',
    [
        check('tituloProducto','El titulo es obligatorio').not().isEmpty(),
        // check('start','Fecha de inicio es obligatoria').custom( isDate ),
        // check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearProductoTienda 
);

// Actualizar Evento
router.put(
    '/:id', 
    [
        check('tituloProducto','El titulo es obligatorio').not().isEmpty(),
        // check('start','Fecha de inicio es obligatoria').custom( isDate ),
        // check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarProductoTienda
);

// Borrar evento
router.delete('/:id', eliminarProductoTienda );

module.exports = router;