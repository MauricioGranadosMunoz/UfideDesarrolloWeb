const { Schema, model } = require('mongoose');

const ProductoTiendaSchema = Schema({

    tituloProducto: {
        type: String,
        required: true
    },
    descripcionProducto: {
        type: String,        
    },
    precioProducto: {
        type: Number,
        required: true
    },
    // FechaAgregadoProducto: {
    //     type: Date,
    //     required: true
    // },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});

ProductoTiendaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('ProductoTienda', ProductoTiendaSchema );

