import React from 'react';
import HeaderApp from './HeaderApp';

import TabConfiguracion from './configuracionVisualizador/TabConfiguracion';

const ConfiguracionVisualizador = () => {
    const estiloConfiguracion = {
        backgroundColor: '#D8D8D8', // Color de fondo
        padding: '20px', // Agrega un poco de espacio alrededor del contenido
        height: 'calc(100vh - 64px)', // Altura total de la ventana menos la altura del HeaderApp
        overflowY: 'scroll', // Activa el desplazamiento vertical
    };

    return (
        <div>
            <HeaderApp /> {/* Instancia el componente HeaderApp */}
            <div style={estiloConfiguracion}>
                <div className='row'>
                    <div className='col-12'>
                   <TabConfiguracion/>
                    </div>
                </div>
                {/* A */}
               
            </div>
        </div>
    );
};

export default ConfiguracionVisualizador;
