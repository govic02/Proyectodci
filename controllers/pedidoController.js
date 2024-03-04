const Pedido = require('.../models/Pedido');

// Obtener todos los registros
const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Obtener un registro por id_int1
const obtenerPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findOne({ id_int1: req.params.id_int1 });
        if (!pedido) {
            return res.status(404).send('El pedido con ese ID no fue encontrado');
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear un nuevo registro
const crearPedido = async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.status(201).json(nuevoPedido);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Actualizar un registro por id_int1
const actualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findOneAndUpdate({ id_int1: req.params.id_int1 }, req.body, { new: true });
        if (!pedido) {
            return res.status(404).send('El pedido con ese ID no fue encontrado');
        }
        res.json(pedido);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Eliminar un registro por id_int1
const eliminarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findOneAndDelete({ id_int1: req.params.id_int1 });
        if (!pedido) {
            return res.status(404).send('El pedido con ese ID no fue encontrado');
        }
        res.send('Pedido eliminado');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    obtenerPedidos,
    obtenerPedido,
    crearPedido,
    actualizarPedido,
    eliminarPedido
};
