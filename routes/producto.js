/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getProductosTienda,crearProductoTienda, actualizarProductoTienda,eliminarProductoTienda } = require('../controllers/productoTienda');

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use( validarJWT );
cloudinary.config({ 
  cloud_name: 'fid-litas', 
  api_key: '991336547745295', 
  api_secret: 'TUk4k2yyhQDGTM2rLFsB3N5Ci24' 
});
const storage = multer.diskStorage({
    filename: function(req, file, callback) {
      callback(null, Date.now() + file.originalname);
    }
  });
  
  // This function is for filtering the files that are being upload to only be the specified types of 'images' & 'pdf'.
  const imageFilter = function(req, file, cb) {
    // accept image & pdf files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/i)) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  };
  
  // Instantiating a multer instance, and passing our helper functions above to configure it properly, also passing a 'limit' property defining in 'bits' the size of limiting the uploaded file, in this case to 5mb.
  const upload = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits: { fileSize: 5000000 }
  });

// Obtener eventos 
router.post('/', getProductosTienda );

// Crear un nuevo evento
// router.post(
//     '/new',
//     [
//         check('tituloProducto','El titulo es obligatorio').not().isEmpty(),
//         // check('start','Fecha de inicio es obligatoria').custom( isDate ),
//         // check('end','Fecha de finalización es obligatoria').custom( isDate ),
//         validarCampos
//     ],
//     crearProductoTienda 
// );

router.post(
    '/new',
    upload.single('file'),
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