import mongoose from 'mongoose';
const adicionalesPedidos = new mongoose.Schema({
    nombre_pedido: String,
    diametro: String,
    cantidad: String,
    largo: String,
    urn: String
  });
  const AdicionalesPedidos = mongoose.model('AdicionalesPedidos', adicionalesPedidos);
  export default AdicionalesPedidos;