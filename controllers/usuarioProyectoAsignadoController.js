import UsuarioProyectoAsignado from'../models/usuarioProyectoAsignado.js';

// Función para generar la fecha y hora actual
const obtenerFechaHoraActual = () => {
  const ahora = new Date();
  const fecha = ahora.toISOString().split('T')[0]; // Obtiene la fecha en formato 'YYYY-MM-DD'
  const hora = ahora.toTimeString().split(' ')[0]; // Obtiene la hora en formato 'HH:MM:SS'
  return { fecha, hora };
};



// Controlador para crear un nuevo registro
const crearUsuarioProyectoAsignado = async (req, res) => {
  try {
    const { id, idUsuario, urn, proyectoKey } = req.body;
    const { fecha, hora } = obtenerFechaHoraActual();
    const nuevoRegistro = new UsuarioProyectoAsignado({
      id,
      idUsuario,
      urn,
      proyectoKey,
      fecha,
      hora
    });
    const usuarioProyectoAsignadoGuardado = await nuevoRegistro.save();
    res.status(201).json(usuarioProyectoAsignadoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Controlador para actualizar un registro por idUsuario
const actualizarUsuarioProyectoAsignadoPorIdUsuario = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { idUsuario, urn, proyectoKey } = req.body;

    // Verificar si existe un registro de UsuarioProyectoAsignado con el ID de usuario
    const usuarioProyectoAsignadoExistente = await UsuarioProyectoAsignado.findOne({ idUsuario });
    
    if (!usuarioProyectoAsignadoExistente) {
      // Si no existe, crear uno nuevo
      const { fecha, hora } = obtenerFechaHoraActual();
      const nuevoRegistro = new UsuarioProyectoAsignado({
        idUsuario,
        urn,
        proyectoKey,
        fecha,
        hora
      });
      await nuevoRegistro.save();
    } else {
      // Si ya existe, actualizar la URN y el proyectoKey
      usuarioProyectoAsignadoExistente.urn = urn;
      usuarioProyectoAsignadoExistente.proyectoKey = proyectoKey; // Corregido el nombre del parámetro
      await usuarioProyectoAsignadoExistente.save();
    }

    // Enviar una respuesta exitosa
    res.status(200).json({ mensaje: 'Registro actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar usuario-proyecto asignado:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const obtenerUsuarioProyectoAsignadoPorIdUsuario = async (req, res) => {
  try {
    const { idUsuario } = req.body; // Accede al ID de usuario desde el cuerpo de la solicitud
    console.log("usuario asignacion");
    console.log(idUsuario);
    const usuarioProyectoAsignado = await UsuarioProyectoAsignado.findOne({ idUsuario });
    if (!usuarioProyectoAsignado) {
      return res.status(404).json({ mensaje: 'Registro no encontrado' });
    }
    console.log(usuarioProyectoAsignado);
    res.status(200).json(usuarioProyectoAsignado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};


  export  {
  crearUsuarioProyectoAsignado,
  actualizarUsuarioProyectoAsignadoPorIdUsuario,
  obtenerUsuarioProyectoAsignadoPorIdUsuario
};
