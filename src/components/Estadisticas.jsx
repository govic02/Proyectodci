import React, { useRef } from 'react';
import GraficoEstadistica from './estadisticas/GraficoEstadistica';
import HeaderApp from './HeaderApp';
import ControlEstadisticas from './estadisticas/ControlEstadisticas';

const Estadisticas = () => {
    const tabsRef = useRef(null);
    const estiloEstadisticas = {
        backgroundColor: '#D8D8D8', // Color de fondo
        padding: '20px', // Agrega un poco de espacio alrededor del contenido
        height: 'calc(100vh - 64px)', // Altura total de la ventana menos la altura del HeaderApp
        overflowY: 'scroll', // Activa el desplazamiento vertical
    };

    return (
        <div>
            <HeaderApp /> {/* Instancia el componente HeaderApp */}
            <div style={estiloEstadisticas}>
                <div className='row'>
                    <div className='col-12'>
                        <p style={{ marginLeft: '30px' }}>
                        <ControlEstadisticas />
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <GraficoEstadistica titulo="Gráfico 1" contenido="Descripción" />
                    </div>
                    <div className='col-6'>
                        <GraficoEstadistica titulo="Gráfico 2" contenido="Descripción" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <GraficoEstadistica titulo="Gráfico 1" contenido="Descripción" />
                    </div>
                    <div className='col-6'>
                        <GraficoEstadistica titulo="Gráfico 2" contenido="Descripción" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <GraficoEstadistica titulo="Gráfico 1" contenido="Descripción" />
                    </div>
                    <div className='col-6'>
                        <GraficoEstadistica titulo="Gráfico 2" contenido="Descripción" />
                    </div>
                </div>
                {/* Repite para más filas de gráficos */}
                {/* ... */}
            </div>
        </div>
    );
};

export default Estadisticas;
