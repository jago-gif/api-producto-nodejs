const Producto = require('../models/producto');
exports.crearProducto = async(req, res) => { 
    try {
        let producto;
        producto = new Producto(req.body);
        await producto.save()
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}
exports.obtenerProductos = async(req, res) => {
    try {
        const productos = await Producto.find();
        res.send(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}
exports.actualizarProducto = async(req, res) => {
    try {
        const {nombre, categoria, ubicacion, precio} = req.body;
        let producto = await Producto.findById(req.params.id);
        if(!producto) {
        res.status(404).json({ message: 'Producto no encontrado' });
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;
        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new: true})
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}
exports.obtenerProducto = async(req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if(!producto) {
        res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}
exports.eliminarProducto = async(req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if(!producto) {
        res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}