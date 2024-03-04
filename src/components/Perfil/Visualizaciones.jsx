import React from 'react';

const Visualizaciones = ({ numeroVisualizaciones }) => {
    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: '#DA291C', // Cambio de color de fondo
        color: '#fff',
        marginLeft: '5px',
        borderRadius: '20px',
        marginTop: '50px',
        height: '150px',
    };

    // Los demás estilos permanecen iguales
    const imageContainerStyle = {
        position: 'relative',
        marginRight: '10px',
    };

    const imageSmallStyle = {
        width: '60px',
        height: '60px',
        position: 'relative',
        left: '25px',
        marginBottom: '15px'
    };

    const textContainerStyle = {
        textAlign: 'right',
        marginRight: '15px'
    };

    const titleStyle = {
        fontWeight: 'bold',
        fontSize: '20px'
    };

    const numberStyle = {
        fontSize: '20px',
        margin: 0,
    };

    return (
        <div style={cardStyle}>
            <div style={imageContainerStyle}>
                <img src={'images/eyewhite.svg'} alt="Imagen Pequeña" style={imageSmallStyle} />
            </div>
            <div style={textContainerStyle}>
                <div style={titleStyle}>Visualizaciones</div>
                <div style={numberStyle}>{numeroVisualizaciones || '47.832'}</div>
            </div>
        </div>
    );
};

export default Visualizaciones;
