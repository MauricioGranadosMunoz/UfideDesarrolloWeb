const { response } = require('express');
const ProductoTienda = require('../models/ProductoTienda');

const getProductosTienda = async( req, res = response ) => {

    const productosTienda = await ProductoTienda.find()
                                .populate('user','name');

    res.json({
        ok: true,
        productosTienda
    });
}

const crearProductoTienda = async ( req, res = response ) => {

    const productosTienda = new ProductoTienda( req.body );

    try {

        productosTienda.user = req.uid;
        
        const productoGuardado = await productosTienda.save();

        res.json({
            ok: true,
            productosTienda: productoGuardado
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarProductoTienda = async( req, res = response ) => {

    const productoId = req.params.id;
    const uid = req.uid;

    try {

        const producto = await ProductoTienda.findById( productoId );

        if ( !producto ) {
            return res.status(404).json({
                ok: false,
                msg: 'producto no existe por ese id'
            });
        }

        if ( producto.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoProducto = {
            ...req.body,
            user: uid
        }

        const productoActualizado = await ProductoTienda.findByIdAndUpdate( productoId, nuevoProducto, { new: true } );

        res.json({
            ok: true,
            producto: productoActualizado
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const eliminarProductoTienda = async( req, res = response ) => {

    const productoId = req.params.id;
    const uid = req.uid;

    try {

        const producto = await ProductoTienda.findById( productoId );

        if ( !producto ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if ( producto.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evento'
            });
        }


        await ProductoTienda.findByIdAndDelete( productoId );

        res.json({ ok: true });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}


module.exports = {
    getProductosTienda,
    crearProductoTienda,
    actualizarProductoTienda,
    eliminarProductoTienda,
}