import mongoose from 'mongoose';
const users = new mongoose.Schema({
    idUsu: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    tipoUsuario: String
  });
  const Users = mongoose.model('users', users);
  export default Users;
  