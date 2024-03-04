const Users = require('.../models/Users');

// Obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Users.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Obtener un usuario por idUsu
const obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Users.findOne({ idUsu: req.params.idUsu });
        if (!usuario) {
            return res.status(404).send('El usuario con ese ID no fue encontrado');
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear un nuevo usuario
const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Users(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Actualizar un usuario por idUsu
const actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Users.findOneAndUpdate({ idUsu: req.params.idUsu }, req.body, { new: true });
        if (!usuario) {
            return res.status(404).send('El usuario con ese ID no fue encontrado');
        }
        res.json(usuario);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Eliminar un usuario por idUsu
const eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Users.findOneAndDelete({ idUsu: req.params.idUsu });
        if (!usuario) {
            return res.status(404).send('El usuario con ese ID no fue encontrado');
        }
        res.send('Usuario eliminado');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};
