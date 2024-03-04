import React from 'react';
import styles from '../styles/Visualizador.module.css';
import { Link } from 'react-router-dom';
const ColumnaIzquierda = ({ isCollapsed, handleCollapse }) => {
    const estiloLiNormal = {
        fontSize: '14px',
        height: '20px',
        marginBottom: '30px',
        textAlign: isCollapsed ? 'center' : 'left'
    };

    const estiloTituloLi = {
        fontSize: isCollapsed ? '14px' : '16px',
        height: '20px',
        marginBottom: '30px',
        marginLeft: isCollapsed ? '0' : '30px',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    };

    const estiloImg = {
        alignItems: 'center',
        marginRight: '10px',
        marginTop: isCollapsed ? '25px' : '0',
        marginBottom: isCollapsed ? '5px' : '0'
    };

    const imgStyles = {
        alignItems: 'center',
        marginRight: '10px',
      };
      const imgStylesColap ={
          alignItems: 'left',
          marginRight:'1px',
          marginTop: '25px',
          marginBottom: '5px'
      }
    
    
    const tituloLiColap = {
        fontSize: '14px',
        marginTop: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        marginRight:'70px'
    
    }
const liNormal = {
    fontSize: '14px',
    height: '20px',
    marginBottom: '30px'
  };
  
  const liNormalColap = {
      fontSize: '14px',
      textAlign: 'center',
      paddingLeft:'2px',
      marginRight:'75px'
  
  }
  const tituloLi ={
      fontSize: '16px',
      height: '20px',
      marginBottom: '30px',
      marginleft: '20px',
      fontWeight: 'bold'
  }

  const estiloPrimeraFila = {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height:'64px'
};
    return (
        <div className={`${styles.leftColumn} col-${isCollapsed ? '1' : '2'}`} style={{width: isCollapsed ? '100%' : '100%',  height:'100%'}}>
            <div className="container-fluid" style={{padding: '0'}}>
                <div className="row">
                <div className="col" style={estiloPrimeraFila}>
                    <div className="col" style={{backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                        {!isCollapsed && (
                            <img src="images/logo.png" alt="Logo" style={{width: '43%', alignSelf: 'flex-start',marginRight: '135px', marginTop: '10px'}} />
                        )}
                        <button onClick={handleCollapse} style={{background: 'none', border: 'none', marginleft: '30px'}}>
                            {isCollapsed && (
                                <img src="images/isotipo.png" alt="Más" style={{ marginLeft: '15px',marginRight: '25px', width: '29%',marginBottom: '5px',marginTop:'5px'}} />
                            )}
                            <img src="images/puntos.svg" alt="Imagen" style={{marginRight: '30px'}}/>
                        </button>
                    </div></div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul style={{listStyleType: 'none', color: '#D4D3D3', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', letterSpacing: '-0.35px', marginTop: '10px', textAlign: 'left', paddingLeft: '25px'}}>
                        <li style={isCollapsed ? tituloLiColap : tituloLi}>
                                {isCollapsed ? 'Principal': 'Principal'}
                            </li>
                           
                            <li style={isCollapsed ? liNormalColap : liNormal}>
                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <img src={isCollapsed ? "images/visualizador.svg" : "images/visualizador.svg"} alt="Estadísticas" style={isCollapsed ?imgStylesColap:imgStyles} />
                                    Visualizador
                                </Link>
                            </li>
                            <li style={isCollapsed ? liNormalColap : liNormal}>
                              <Link to="/estadisticas" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <img src={isCollapsed ? "images/estadisticas.svg" : "images/estadisticas.svg"} alt="Estadísticas" style={isCollapsed ?imgStylesColap:imgStyles} />
                                Estadísticas 
                              </Link>
                            </li>
                            <li style={isCollapsed ? liNormalColap : liNormal}>
                            <Link to="/ConfiguracionVisualizador" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img src={isCollapsed ? "images/configuracion.svg" : "images/configuracion.svg"} alt="Estadísticas" style={isCollapsed ?imgStylesColap:imgStyles} />
                              Configuración Visualizador
                              </Link>
                            </li>
                            <li style={isCollapsed ? tituloLiColap : tituloLi}>
                                {isCollapsed ? 'Administración': 'Administración'}
                               
                            </li>
                            {/* ... otros elementos <li> */}
                            <li style={isCollapsed ? liNormalColap : liNormal}>
                            <Link to="/proyectos" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img src={isCollapsed ? "images/proyectos.svg" : "images/proyectos.svg"} alt="Estadísticas" style={isCollapsed ?imgStylesColap:imgStyles} />
                                {isCollapsed ? <><br/><span>Proyectos</span></> : 'Proyectos'}
                                </Link>
                            </li>
                            <li style={isCollapsed ? liNormalColap : liNormal}>
                            <Link to="/Perfil" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img src={isCollapsed ? "images/micuenta.svg" : "images/micuenta.svg"} alt="Estadísticas" style={isCollapsed ?imgStylesColap:imgStyles} />
                               
                                {isCollapsed ? <><br/><span>Perfil</span></> : 'Perfil'}
                                </Link>
                            </li>
                            <li style={isCollapsed ? liNormalColap : liNormal}>
                            <Link to="/AdministracionCuentas" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img src={isCollapsed ? "images/administracioncuentas.svg" : "images/administracioncuentas.svg"} alt="Estadísticas" style={isCollapsed ?imgStylesColap:imgStyles} />
                               Administracion Cuentas
                            </Link>
                            </li>
                            {/* ... otros elementos <li> ... */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColumnaIzquierda;
