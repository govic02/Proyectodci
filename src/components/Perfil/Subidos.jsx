import React from 'react';

const Subidos = ({ numeroSubidos }) => {
    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      
        backgroundColor: '#737373', // Cambio de color de fondo
        color: '#fff',
        marginLeft: '5px',
        borderRadius: '20px',
        marginTop: '50px',
        height: '150px',
        marginRight: '35px'
    };

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
                <img src={'images/perfilEditarIcn.svg'} alt="Imagen Pequeña" style={imageSmallStyle} />
            </div>
            <div style={textContainerStyle}>
                <div style={titleStyle}>Subidos</div>
                <div style={numberStyle}>{numeroSubidos || '250'}</div>
            </div>
        </div>
    );
};

export default Subidos;
