import mongoose from 'mongoose';
import modelo from '../models/modelo.js';
import plan from '../models/plan.js';
import adicionalesPedidos from '../models/adicionalesPedidos.js';
import filtros from '../models/Filtros.js';
import proyectosUsuario from '../models/proyectosUsuario.js';
import users from '../models/users.js';
// Datos de ejemplo para cada modelo
const dataModelo = [
    { nombre: 'Modelo1', id: 1, modelo: 'Tipo1' },
    { nombre: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cDJfcHJveWVjdG9zL0ZWJTIwUm9tYSUyMDM2MCUyMDAzLnJ2dA==', id: 2, modelo: 'Tipo1' },
    { nombre: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cDJfcHJveWVjdG9zL2JlbGxvdG8yMDIzLnJ2dA==', id: 3, modelo: 'Tipo1' },
    { nombre: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cDJfcHJveWVjdG9zL2JlbGxvdG8xOS5ydnQ=', id: 4, modelo: 'Tipo1' },
    // ... Más datos
];

const dataPlan = [
    { dbId: 101, fecha_base: '2020-01-01', fecha_plan: '2020-12-31', urn: 'urn:ejemplo' },
    // ... Más datos
];

const dataAdicionalesPedidos = [
    { nombre_pedido: 'Pedido1', diametro: '10cm', cantidad: '5', largo: '2m', urn: 'urn:ejemplo1' },
    // ... Más datos
];

const dataFiltros = [
    { filtro_1: 'FiltroA', filtro_2: 'FiltroB', id: 1001, fierro: 'Hierro', largo: '15cm', diametro: '5cm', nueva: 'Sí' },
    // ... Más datos
];

const dataProyectosUsuario = [
    { usuario: 'usuario1', namep: 'Proyecto1', urn: 'urn:proyecto1', nameusuario: 'nameusuario1' },
    // ... Más datos
];

const dataUsers = [
    { idUsu: 1, username: 'user1', password: 'pass1', fullname: 'Usuario Uno', tipoUsuario: 'Tipo1' },
    // ... Más datos
];

mongoose.connect('mongodb+srv://nicolasgonzalez:q9cr9ZcS86IMzM6e@cluster0.euo83bl.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const seedDatabase = async () => {
    // Sembrar Modelo
   
        await modelo.insertMany(dataModelo);
    

    // Sembrar Plan
    if (await plan.countDocuments() === 0) {
        await plan.insertMany(dataPlan);
    }

    // Sembrar AdicionalesPedidos
    if (await adicionalesPedidos.countDocuments() === 0) {
        await adicionalesPedidos.insertMany(dataAdicionalesPedidos);
    }

    // Sembrar Filtros
    if (await filtros.countDocuments() === 0) {
        await filtros.insertMany(dataFiltros);
    }

    // Sembrar ProyectosUsuario
    if (await proyectosUsuario.countDocuments() === 0) {
        await proyectosUsuario.insertMany(dataProyectosUsuario);
    }

    // Sembrar Users
    if (await users.countDocuments() === 0) {
        await users.insertMany(dataUsers);
    }

    console.log('Base de datos poblada con datos iniciales');
};

seedDatabase().then(() => {
    mongoose.connection.close();
});
