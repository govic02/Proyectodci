const pedido = new mongoose.Schema({
    ids: String,
    fecha: String,
    proveedor: String,
    id_int1: Number,
    pesos: String,
    largos: String,
    listado_pesos: String,
    listado_largos: String,
    nombre_pedido: String,
    urn_actual: String
  });
  