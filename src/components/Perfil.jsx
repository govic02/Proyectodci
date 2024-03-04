import React from 'react';
import HeaderApp from './HeaderApp';
import DatosPerfil from './Perfil/DatosPerfil';
import Ediciones from './Perfil/Ediciones';
import Visualizaciones from './Perfil/Visualizaciones';
import Subidos from './Perfil/Subidos';
import ProyectosAsignados from './Perfil/ProyectosAsignados';
import DatosUsuario from './Perfil/DatosUsuario';
const Perfil = () => {
    const estiloPerfil = {
     
        overflowY: 'scroll', // Activa el desplazamiento vertical
        overflowX: 'hidden', // Activa el desplazamiento vertical
    };
    return (
        <div style={estiloPerfil}>
               <HeaderApp /> {/* Instancia el componente HeaderApp */}
           <div class='row'>
                <div class='col-6'>
                        <DatosPerfil />
                </div>
                <div class='col-6'>
                <div class='row'>
                             <div class='col-4'>
                                <Ediciones />
                             </div>
                             <div class='col-4'>
                                <Visualizaciones />
                             </div>
                             <div class='col-4'>
                             <Subidos />
                             </div>
                    </div>
                </div>

           </div>
           <div class='row'>
                <div class='col-6'>
                   <ProyectosAsignados/>
                </div>
                <div class='col-6'>
                    <DatosUsuario />
                </div>

           </div>
            {/* Inserta gráficos o tablas de estadísticas aquí */}
        </div>
    );
};

export default Perfil;
