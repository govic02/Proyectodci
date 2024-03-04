import React from 'react';
import HeaderApp from './HeaderApp';
import BarraNuevaCuenta from './AdministracionCuentas/BarraNuevaCuenta';
import TablaUsuarios from './AdministracionCuentas/TablaUsuarios';
const AdministracionCuentas = () => {
    const estiloAdministracionCuentas = {
     
        overflowY: 'scroll', // Activa el desplazamiento vertical
        overflowX: 'hidden', // Activa el desplazamiento vertical
        backgroundColor: '#D8D8D8',
        height:'100%'
    };

    return (
        <div style={estiloAdministracionCuentas}>
        <HeaderApp /> {/* Instancia el componente HeaderApp */}
    <div class='row'>
         <div class='col-12'>
                <BarraNuevaCuenta />
         </div>
         

    </div>
    <div class='row'>
         <div class='col-12'>
              <TablaUsuarios />
         </div>
         

    </div>
     {/* Inserta gráficos o tablas de estadísticas aquí */}
 </div>
    );
};

export default AdministracionCuentas;
