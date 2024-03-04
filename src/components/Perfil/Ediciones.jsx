import React from 'react';

const Ediciones = ({ numeroEdiciones }) => {
    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Asegura que los elementos se distribuyan en todo el ancho del contenedor
        padding: '10px',
        backgroundColor: '#000',
        color: '#fff',
        marginLeft: '20px',
        borderRadius: '20px',
        marginTop: '50px',
        height: '150px',
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
        textAlign: 'right', // Alinea el texto a la derecha
        marginRight: '15PX'
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
                <div style={titleStyle}>Ediciones</div>
                <div style={numberStyle}>{numeroEdiciones || '250'}</div>
            </div>
        </div>
    );
};

export default Ediciones;
