import React from 'react';

const Paleta = () => {
    const estiloDelComponente = {
        width: '65px',
        height: '210px',
        position: 'absolute', // Cambiado de 'fixed' a 'absolute'
        left: '30px', // Ajustar el margen izquierdo
        
        top: '30%', // Ajusta según la ubicación deseada
        transform: 'translateY(-50%)',
        zIndex: 1000,
        backgroundColor: '#DA291C', // Color de fondo actualizado
        borderRadius: '20px', // Bordes redondeados
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Sombra para el efecto flotante
    };

    const estiloFila = {
        flex: '1',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '8px' // Margen alrededor del SVG
    };

    const estiloSeparador = {
        height: '1px',
        backgroundColor: '#FF8B8B', // Color del separador
        width: '80%', // Ancho del separador
        alignSelf: 'center' // Alinea el separador al centro del contenedor
    };
    return (
        <div style={estiloDelComponente}>
        <div style={estiloFila}>
            <img src="images/paletaBrocha.svg" alt="Icono 1" />
        </div>
        <div style={estiloSeparador}></div>
        <div style={estiloFila}>
            <img src="images/paletaRefrescar.svg" alt="Icono 2" />
        </div>
        <div style={estiloSeparador}></div>
        <div style={estiloFila}>
            <img src="images/paletaFecha.svg" alt="Icono 3" />
        </div>
    </div>
    );
};

export default Paleta;
